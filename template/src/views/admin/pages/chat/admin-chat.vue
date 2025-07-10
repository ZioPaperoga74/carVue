<template>
  <div class="admin-chat-wrapper">
    <div class="admin-chat-sidebar">
      <h4>Utenti</h4>
      <ul>
        <li
          v-for="user in users"
          :key="user.id"
          :class="{ active: user.id === selectedUserId }"
          @click="selectUser(user.id)"
        >
          <span>{{ user.email || user.id }}</span>
        </li>
      </ul>
    </div>
    <div class="admin-chat-main">
      <div v-if="!selectedUserId" class="admin-chat-placeholder">
        Seleziona un utente per vedere la chat
      </div>
      <div v-else class="admin-chat-messages-container">
        <div class="admin-chat-messages" ref="messagesContainer">
          <div
            v-for="msg in messages"
            :key="msg.id"
            :class="[
              'admin-chat-msg',
              msg.userID === adminId ? 'admin' : 'user',
            ]"
          >
            <span class="msg-author">{{
              msg.userID === adminId ? "Admin" : "Utente"
            }}</span>
            <span class="msg-text">{{ msg.message }}</span>
            <span class="msg-time">{{
              new Date(msg.created).toLocaleTimeString()
            }}</span>
          </div>
        </div>
        <form class="admin-chat-form" @submit.prevent="sendMessage">
          <input
            v-model="newMessage"
            placeholder="Scrivi un messaggio..."
            required
          />
          <button type="submit">Invia</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import PocketBase from "pocketbase";
import { useAuth } from "@/composables/useAuth";

const adminId = "sp07u85f4drqtrk";
const pb = new PocketBase("http://127.0.0.1:8090");
const { currentUser } = useAuth();

const users = ref([]);
const selectedUserId = ref(null);
const messages = ref([]);
const newMessage = ref("");
const messagesContainer = ref(null);

const fetchUsers = async () => {
  // Prendi tutti i messaggi, raggruppa per userID (escludi admin)
  const allMessages = await pb
    .collection("messages")
    .getFullList({ sort: "created" });
  const userMap = {};
  allMessages.forEach((msg) => {
    if (msg.userID !== adminId) {
      userMap[msg.userID] = msg;
    }
  });
  // Puoi arricchire con email se vuoi
  users.value = Object.values(userMap);
};

const fetchMessages = async () => {
  if (!selectedUserId.value) return;
  const filter = `((userID='${selectedUserId.value}' && productID='${adminId}') || (userID='${adminId}' && productID='${selectedUserId.value}'))`;
  const res = await pb
    .collection("messages")
    .getFullList({ filter, sort: "created" });
  messages.value = res;
  await nextTick();
  scrollToBottom();
};

const sendMessage = async () => {
  if (!newMessage.value.trim() || !selectedUserId.value) return;
  await pb.collection("messages").create({
    userID: adminId,
    productID: selectedUserId.value,
    message: newMessage.value,
  });
  newMessage.value = "";
};

const scrollToBottom = () => {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
};

const selectUser = async (id) => {
  selectedUserId.value = id;
  await fetchMessages();
};

onMounted(async () => {
  if (!currentUser.value || currentUser.value.id !== adminId) {
    window.location.href = "/admin-template/index";
    return;
  }
  await fetchUsers();
  pb.collection("messages").subscribe("*", async ({ action, record }) => {
    if (
      selectedUserId.value &&
      ((record.userID === selectedUserId.value &&
        record.productID === adminId) ||
        (record.userID === adminId &&
          record.productID === selectedUserId.value))
    ) {
      await fetchMessages();
    }
    // Aggiorna lista utenti se arriva nuovo utente
    await fetchUsers();
  });
});
</script>

<style scoped>
.admin-chat-wrapper {
  display: flex;
  height: 80vh;
  border: 1px solid #eee;
}
.admin-chat-sidebar {
  width: 250px;
  border-right: 1px solid #eee;
  padding: 1rem;
  overflow-y: auto;
}
.admin-chat-sidebar ul {
  list-style: none;
  padding: 0;
}
.admin-chat-sidebar li {
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 4px;
}
.admin-chat-sidebar li.active {
  background: #e9e9ff;
  font-weight: bold;
}
.admin-chat-main {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.admin-chat-placeholder {
  padding: 2rem;
  color: #888;
  text-align: center;
}
.admin-chat-messages-container {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.admin-chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  background: #f9f9f9;
}
.admin-chat-msg {
  margin-bottom: 1rem;
}
.admin-chat-msg.admin {
  text-align: right;
  background: #d1ffd1;
  padding: 0.5rem;
  border-radius: 8px;
}
.admin-chat-msg.user {
  text-align: left;
  background: #e9e9ff;
  padding: 0.5rem;
  border-radius: 8px;
}
.msg-author {
  font-weight: bold;
  margin-right: 0.5rem;
}
.msg-time {
  font-size: 0.8em;
  color: #888;
  margin-left: 0.5rem;
}
.admin-chat-form {
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
  border-top: 1px solid #eee;
}
.admin-chat-form input {
  flex: 1;
  padding: 0.5rem;
}
.admin-chat-form button {
  padding: 0.5rem 1rem;
}
</style>
