<template>
  <div>
    <layouts-header></layouts-header>
    <user-breadcrumb :title="title" :text="text" :text1="text1" />
    <user-tabset></user-tabset>
    <div class="content content-chat top-space-chat">
      <div class="container">
        <div class="content-header">
          <h4>Messaggi</h4>
          <!-- Mostra il nome della macchina se è selezionata -->
          <div
            v-if="
              selectedCarId && selectedCarId !== 'general' && currentCarInfo
            "
            class="mt-2"
          >
            <span class="badge bg-primary">
              <i class="fa-solid fa-car me-1"></i>
              {{ currentCarInfo.brand || "Marca" }}
              {{ currentCarInfo.model || "Modello" }} ({{
                currentCarInfo.year || "Anno"
              }})
            </span>
          </div>
        </div>
        <div style="color: red">{{ error }}</div>
        <!-- <div style="color: blue">{{ currentUser }}</div> -->

        <!-- Messaggio quando non c'è una chat selezionata -->
        <div v-if="!selectedChat" class="alert alert-warning mb-3">
          <h5>Nessuna chat selezionata</h5>
          <p>
            Per iniziare una conversazione, clicca su "Contatta il venditore"
            dalla pagina di dettaglio di una macchina.
          </p>
        </div>

        <div class="row chat-window" ref="chatWindow">
          <div class="col-xl-12">
            <div class="chat-window" ref="chatWindow">
              <!-- Chat Left: Lista chat per veicolo -->
              <div class="chat-cont-left">
                <div class="chat-header">
                  <span>Chats</span>
                </div>
                <div class="chat-users-list">
                  <div class="chat-scroll">
                    <a
                      v-for="chat in chats"
                      :key="chat.productID"
                      href="javascript:void(0);"
                      class="notify-block d-flex open-chat"
                      :class="{
                        active:
                          selectedChat &&
                          selectedChat.productID === chat.productID,
                      }"
                      @click="selectChat(chat)"
                    >
                      <div class="media-img-wrap flex-shrink-0">
                        <div class="avatar avatar-online">
                          <img
                            src="@/assets/img/profiles/avatar-08.jpg"
                            alt="Admin"
                            class="avatar-img rounded-circle"
                          />
                        </div>
                      </div>
                      <div class="media-body chat-custom flex-grow-1">
                        <div>
                          <div class="user-name">
                            Team Vendite - {{ chat.carInfo?.brand || "Marca" }}
                            {{ chat.carInfo?.model || "Modello" }} ({{
                              chat.carInfo?.year || "Anno"
                            }})
                          </div>
                          <div class="user-last-chat">
                            Chatta con l'amministratore
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <!-- /Chat Left -->

              <!-- Chat Right -->
              <div class="chat-cont-right">
                <div class="chat-header">
                  <div class="notify-block d-flex">
                    <div class="media-img-wrap flex-shrink-0">
                      <div class="avatar avatar-online">
                        <img
                          src="@/assets/img/profiles/avatar-08.jpg"
                          alt="Admin"
                          class="avatar-img rounded-circle"
                        />
                      </div>
                    </div>
                    <div class="media-body flex-grow-1">
                      <div class="user-name">
                        Team Vendite -
                        {{ selectedChat?.carInfo?.brand || "Marca" }}
                        {{ selectedChat?.carInfo?.model || "Modello" }} ({{
                          selectedChat?.carInfo?.year || "Anno"
                        }})
                      </div>
                      <div class="user-status">online</div>
                    </div>
                  </div>
                </div>
                <div class="chat-body">
                  <div class="chat-scroll">
                    <!-- Messaggio quando non ci sono messaggi -->
                    <div v-if="messages.length === 0" class="text-center p-4">
                      <i class="fa-solid fa-comments fa-3x text-muted mb-3"></i>
                      <h5>Nessun messaggio ancora</h5>
                      <p class="text-muted">
                        Inizia la conversazione scrivendo un messaggio qui sotto
                      </p>
                    </div>

                    <!-- Lista messaggi -->
                    <ul v-else class="list-unstyled">
                      <li
                        v-for="msg in messages"
                        :key="msg.id"
                        :class="[
                          'notify-block',
                          msg.sender === currentUser.id
                            ? 'sent d-flex'
                            : 'received d-flex',
                        ]"
                      >
                        <div
                          v-if="msg.sender !== currentUser.id"
                          class="avatar flex-shrink-0"
                        >
                          <img
                            src="@/assets/img/profiles/avatar-08.jpg"
                            alt="Admin"
                            class="avatar-img rounded-circle"
                          />
                        </div>
                        <div class="media-body flex-grow-1">
                          <div class="msg-box">
                            <div>
                              <p>{{ msg.message }}</p>
                              <ul class="chat-msg-info">
                                <li>
                                  <div class="chat-time">
                                    <span>{{
                                      new Date(msg.created).toLocaleTimeString()
                                    }}</span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="chat-footer">
                  <form @submit.prevent="sendMessage">
                    <div class="input-group">
                      <input
                        v-model="newMessage"
                        type="text"
                        class="input-msg-send form-control rounded-pill"
                        :placeholder="
                          selectedChat
                            ? 'Scrivi un messaggio...'
                            : 'Seleziona una chat'
                        "
                        :disabled="!selectedChat"
                        required
                      />
                      <button
                        type="submit"
                        class="btn msg-send-btn rounded-pill ms-2"
                        :disabled="!selectedChat || !newMessage.trim()"
                      >
                        <i class="fa-solid fa-paper-plane"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <!-- /Chat Right -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <layout-footer></layout-footer>
    <user-messages-modal></user-messages-modal>
  </div>
</template>
<script setup>
import { ref, onMounted, nextTick, computed, watch } from "vue";
import PocketBase from "pocketbase";
import { useAuth } from "@/composables/useAuth";
import { useRoute, useRouter } from "vue-router";

const ADMIN_ID = "sp07u85f4drqtrk";
const pb = new PocketBase("http://127.0.0.1:8090");
const { currentUser } = useAuth();
const route = useRoute();
const router = useRouter();

const chats = ref([]); // Lista chat (ogni chat = { productID, carInfo })
const selectedChat = ref(null); // Chat selezionata (oggetto chat)
const messages = ref([]);
const newMessage = ref("");
const loading = ref(false);
const error = ref("");
const messagesContainer = ref(null);
const currentCarInfo = ref(null);

const isReady = computed(() => !!currentUser.value && !!currentUser.value.id);

// Carica tutte le chat dell'utente (una per ogni veicolo con cui ha messaggiato)
const fetchChats = async () => {
  if (!isReady.value) return;
  // Prendi tutti i messaggi dell'utente (come mittente o destinatario)
  const allMessages = await pb.collection("messages").getFullList({
    filter: `sender='${currentUser.value.id}' || receiver='${currentUser.value.id}'`,
    sort: "-created",
  });
  // Raggruppa per productID
  const chatMap = {};
  for (const msg of allMessages) {
    // Mostra solo le chat dove l'utente è coinvolto
    if (msg.productID) {
      if (!chatMap[msg.productID]) {
        chatMap[msg.productID] = msg;
      }
    }
  }
  // Carica info auto per ogni chat
  const chatList = await Promise.all(
    Object.values(chatMap).map(async (msg) => {
      let carInfo = null;
      try {
        carInfo = await pb.collection("cars").getOne(msg.productID);
      } catch (e) {}
      return {
        productID: msg.productID,
        carInfo,
      };
    })
  );
  chats.value = chatList;
  // Se arrivo da un carId in query, seleziona quella chat
  if (route.query.carId) {
    const found = chatList.find((c) => c.productID === route.query.carId);
    if (found) {
      selectedChat.value = found;
      await fetchMessagesForChat(found);
    } else {
      // Se non esiste, crea una nuova chat
      let carInfo = null;
      try {
        carInfo = await pb.collection("cars").getOne(route.query.carId);
      } catch (e) {}
      if (carInfo) {
        const newChat = { productID: route.query.carId, carInfo };
        chats.value.unshift(newChat);
        selectedChat.value = newChat;
        messages.value = [];
      }
    }
  } else if (chatList.length > 0) {
    selectedChat.value = chatList[0];
    await fetchMessagesForChat(chatList[0]);
  }
};

// Carica i messaggi per la chat selezionata
const fetchMessagesForChat = async (chat) => {
  if (!chat) return;
  loading.value = true;
  try {
    const filter = `productID='${chat.productID}' && (sender='${currentUser.value.id}' || receiver='${currentUser.value.id}')`;
    const res = await pb.collection("messages").getFullList({
      filter,
      sort: "created",
    });
    messages.value = res;
    await nextTick();
    scrollToBottom();
  } catch (e) {
    error.value =
      "Errore nel caricamento messaggi: " + (e.message || "Errore sconosciuto");
  }
  loading.value = false;
};

// Seleziona una chat dalla lista
const selectChat = async (chat) => {
  selectedChat.value = chat;
  await fetchMessagesForChat(chat);
  // Aggiorna la query string per riflettere la chat selezionata
  router.replace({ query: { carId: chat.productID } });
};

const sendMessage = async () => {
  if (!isReady.value || !newMessage.value.trim()) {
    error.value = "Utente non loggato o messaggio vuoto";
    return;
  }
  if (!selectedChat.value) {
    error.value = "Nessuna chat selezionata.";
    return;
  }
  if (!pb.authStore.isValid) {
    error.value = "Sessione scaduta, effettua nuovamente il login";
    return;
  }
  try {
    await pb.collection("messages").create({
      sender: currentUser.value.id,
      receiver: ADMIN_ID,
      productID: selectedChat.value.productID,
      message: newMessage.value,
    });
    newMessage.value = "";
    error.value = "";
    await fetchMessagesForChat(selectedChat.value);
  } catch (e) {
    error.value =
      "Errore nell'invio del messaggio: " + (e.message || "Errore sconosciuto");
  }
};

const subscribeToMessages = () => {
  pb.collection("messages").subscribe("*", async ({ action, record }) => {
    // Aggiorna la lista chat e i messaggi se la chat è selezionata
    await fetchChats();
    if (
      selectedChat.value &&
      record.productID === selectedChat.value.productID &&
      (record.sender === currentUser.value.id ||
        record.receiver === currentUser.value.id)
    ) {
      await fetchMessagesForChat(selectedChat.value);
    }
  });
};

const scrollToBottom = () => {
  nextTick(() => {
    const chatBody = document.querySelector(".chat-body .chat-scroll");
    if (chatBody) {
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  });
};

onMounted(async () => {
  if (!isReady.value) {
    error.value = "Devi essere loggato per usare la chat";
    return;
  }
  if (currentUser.value?.token) {
    pb.authStore.save(currentUser.value.token, currentUser.value);
  }
  await fetchChats();
  subscribeToMessages();
});
</script>
