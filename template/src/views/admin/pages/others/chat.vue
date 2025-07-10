<template>
  <div>
    <admin-header></admin-header>
    <admin-sidebar></admin-sidebar>
    <div class="page-wrapper">
      <div class="content pb-0">
        <!-- Breadcrumb -->
        <!-- <div
          class="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3"
        >
          <div class="my-auto mb-2">
            <h4 class="mb-1">Chat</h4>
            <nav>
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item">
                  <router-link to="/admin-template/index">Home</router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Chat</li>
              </ol>
            </nav>
          </div>
        </div> -->
        <!-- /Breadcrumb -->

        <div
          class="chat-wrapper"
          style="height: calc(100vh - 120px); display: flex"
        >
          <!-- Chats sidebar -->
          <div class="sidebar-group" style="height: 100%; flex-shrink: 0">
            <div
              id="chats"
              class="sidebar-content active slimscroll"
              style="height: 100%"
            >
              <div class="slimscroll">
                <div class="chat-search-header border-bottom">
                  <div
                    class="header-title d-flex align-items-center justify-content-between"
                  >
                    <h4>Chats</h4>

                    <div class="chat-options">
                      <ul class="d-flex align-items-center">
                        <li>
                          <a
                            href="javascript:void(0)"
                            class="btn chat-search-btn"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Search"
                          >
                            <i class="ti ti-search"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            class="btn no-bg"
                            href="#"
                            data-bs-toggle="dropdown"
                          >
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <ul class="dropdown-menu dropdown-menu-end p-3">
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item"
                                ><i class="ti ti-volume-off me-2"></i>Mute
                                Notification</a
                              >
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item"
                                ><i class="ti ti-clock-hour-4 me-2"></i
                                >Disappearing Message</a
                              >
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item"
                                ><i class="ti ti-clear-all me-2"></i>Clear
                                Message</a
                              >
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item"
                                ><i class="ti ti-trash me-2"></i>Delete Chat</a
                              >
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item"
                                ><i class="ti ti-ban me-2"></i>Block</a
                              >
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <!-- Chat Search -->
                    <div class="chat-search search-wrap contact-search">
                      <form>
                        <div class="input-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Search Contacts"
                          />
                          <span class="input-group-text"
                            ><i class="ti ti-search"></i
                          ></span>
                        </div>
                      </form>
                    </div>
                    <!-- /Chat Search -->
                  </div>
                </div>

                <div class="sidebar-body chat-body" id="chatsidebar">
                  <div class="chat-users-wrap">
                    <div
                      class="chat-list"
                      v-for="chat in chats"
                      :key="chat.chatKey"
                    >
                      <a
                        href="javascript:void(0);"
                        class="chat-user-list"
                        :class="{
                          active:
                            selectedChat &&
                            selectedChat.chatKey === chat.chatKey,
                        }"
                        @click="selectChat(chat)"
                      >
                        <div class="avatar avatar-lg online me-2">
                          <img
                            src="@/assets/admin/img/profiles/avatar-29.jpg"
                            class="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div class="chat-user-info">
                          <div class="chat-user-msg">
                            <h6>
                              {{
                                chat.userInfo?.name ||
                                chat.userInfo?.email ||
                                `Utente ${chat.userID.slice(0, 8)}...`
                              }}
                            </h6>

                            <p v-if="chat.carInfo">
                              <a
                                :href="`/vue/template/listing/listing-details/${chat.productID}`"
                                style="
                                  text-decoration: underline;
                                  color: inherit;
                                "
                              >
                                {{ chat.carInfo.brand }}
                                {{ chat.carInfo.model }} ({{
                                  chat.carInfo.year || "Anno"
                                }})
                              </a>
                            </p>
                            <p v-else>Veicolo non trovato</p>
                          </div>
                          <div class="chat-user-time">
                            <span class="time">{{ chat.lastMessageTime }}</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- / Chats sidebar -->

          <!-- Chat -->
          <div
            class="chat chat-messages show"
            id="middle"
            style="
              position: relative;
              height: 100%;
              flex: 1;
              display: flex;
              flex-direction: column;
            "
          >
            <div style="height: 100%; display: flex; flex-direction: column">
              <div class="chat-header">
                <div class="user-details">
                  <div class="d-xl-none">
                    <a class="text-muted chat-close me-2" href="#">
                      <i class="fas fa-arrow-left"></i>
                    </a>
                  </div>
                  <div class="avatar avatar-lg online flex-shrink-0">
                    <img
                      src="@/assets/admin/img/profiles/avatar-29.jpg"
                      class="rounded-circle"
                      alt="image"
                    />
                  </div>
                  <div class="ms-2 overflow-hidden">
                    <h6>
                      {{
                        selectedChat?.userInfo?.name ||
                        selectedChat?.userInfo?.email ||
                        `Utente ${selectedChat?.userID?.slice(0, 8)}...`
                      }}
                    </h6>

                    <span class="last-seen" v-if="selectedChat?.carInfo">
                      <a
                        :href="`/vue/template/listing/listing-details/${selectedChat.productID}`"
                        style="text-decoration: underline; color: inherit"
                      >
                        {{ selectedChat.carInfo.brand }}
                        {{ selectedChat.carInfo.model }} ({{
                          selectedChat.carInfo.year || "Anno"
                        }})
                      </a>
                    </span>
                    <span class="last-seen" v-else></span>
                  </div>
                </div>
              </div>
              <div
                class="chat-body chat-page-group slimscroll"
                style="
                  overflow-x: hidden;
                  flex: 1;
                  overflow-y: auto;
                  padding-bottom: 20px;
                "
              >
                <div
                  class="messages"
                  style="max-width: 100%; overflow-x: hidden"
                >
                  <div
                    v-for="msg in messages"
                    :key="msg.id"
                    :class="[
                      'chats',
                      msg.sender === ADMIN_ID ? 'chats-right' : '',
                    ]"
                    style="max-width: 100%; overflow-wrap: break-word"
                  >
                    <div class="chat-avatar">
                      <img
                        src="@/assets/admin/img/profiles/avatar-29.jpg"
                        class="rounded-circle"
                        alt="image"
                      />
                    </div>
                    <div
                      class="chat-content"
                      style="
                        max-width: calc(100% - 60px);
                        overflow-wrap: break-word;
                      "
                    >
                      <div
                        class="chat-profile-name"
                        :class="msg.sender === ADMIN_ID ? 'text-end' : ''"
                      >
                        <h6>
                          {{
                            msg.sender === ADMIN_ID
                              ? "Admin"
                              : selectedChat?.userInfo?.name ||
                                selectedChat?.userInfo?.email ||
                                `Utente ${msg.sender?.slice(0, 8)}...`
                          }}
                          <span class="chat-time">{{
                            new Date(msg.created).toLocaleTimeString()
                          }}</span>
                        </h6>
                      </div>
                      <div class="chat-info">
                        <div
                          class="message-content"
                          style="
                            word-wrap: break-word;
                            overflow-wrap: break-word;
                            max-width: 100%;
                            white-space: pre-wrap;
                          "
                        >
                          {{ msg.message }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="chat-footer"
                style="
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  right: 0;
                  background: white;
                  border-top: 1px solid #e0e0e0;
                  padding: 15px;
                  z-index: 10;
                "
              >
                <form
                  class="footer-form d-flex align-items-center"
                  @submit.prevent="sendMessage"
                >
                  <input
                    v-model="newMessage"
                    type="text"
                    class="form-control me-3"
                    placeholder="Inserisci il tuo messaggio qui"
                    :disabled="!selectedChat"
                  />
                  <div class="form-btn">
                    <button
                      class="btn btn-primary"
                      type="submit"
                      :disabled="!selectedChat || !newMessage.trim()"
                    >
                      <i class="ti ti-send"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <!-- /Chat -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, nextTick } from "vue";
import PocketBase from "pocketbase";
import { useAuth } from "@/composables/useAuth";

const ADMIN_ID = "sp07u85f4drqtrk";
const pb = new PocketBase("http://127.0.0.1:8090");

const chats = ref([]); // [{ chatKey, userID, productID, userInfo, carInfo, lastMessageTime }]
const selectedChat = ref(null); // { chatKey, ... }
const messages = ref([]);
const newMessage = ref("");

const userCache = {};
const userPromiseCache = {};
const fetchUser = async (userId) => {
  const normalizedUserId = (userId || "").trim();
  if (!normalizedUserId) return null;
  if (userCache[normalizedUserId]) return userCache[normalizedUserId];
  if (userPromiseCache[normalizedUserId])
    return userPromiseCache[normalizedUserId];
  userPromiseCache[normalizedUserId] = pb
    .collection("users")
    .getOne(normalizedUserId)
    .then((user) => {
      userCache[normalizedUserId] = user;
      delete userPromiseCache[normalizedUserId];
      return user;
    })
    .catch((e) => {
      delete userPromiseCache[normalizedUserId];
      console.error("Errore nel caricamento utente:", normalizedUserId, e);
      return null;
    });
  return userPromiseCache[normalizedUserId];
};

// Carica tutte le chat (gruppate per sender/receiver+productID)
const fetchChats = async () => {
  // Prendi tutti i messaggi dove l'admin è coinvolto
  const allMessages = await pb.collection("messages").getFullList({
    filter: `sender='${ADMIN_ID}' || receiver='${ADMIN_ID}'`,
    sort: "-created",
  });

  // Raggruppa per (userID, productID) - usa sempre la stessa chiave per la stessa conversazione
  const chatMap = {};
  for (const msg of allMessages) {
    if (msg.productID) {
      // Trova l'utente non-admin coinvolto in questa conversazione
      let nonAdminUserId = null;

      // Se l'admin è il mittente, il destinatario è l'utente
      if (msg.sender === ADMIN_ID) {
        nonAdminUserId = msg.receiver;
      } else if (msg.receiver === ADMIN_ID) {
        // Se l'admin è il destinatario, il mittente è l'utente
        nonAdminUserId = msg.sender;
      }
      const normalizedUserId = (nonAdminUserId || "").trim();
      if (normalizedUserId && normalizedUserId !== ADMIN_ID) {
        const key = `${normalizedUserId}_${msg.productID}`;
        if (!chatMap[key]) {
          chatMap[key] = {
            chatKey: key,
            userID: normalizedUserId,
            productID: msg.productID,
            lastMessageTime: new Date(msg.created).toLocaleTimeString(),
            lastMsg: msg,
          };
        } else {
          // Aggiorna il messaggio più recente se necessario
          if (new Date(msg.created) > new Date(chatMap[key].lastMsg.created)) {
            chatMap[key].lastMessageTime = new Date(
              msg.created
            ).toLocaleTimeString();
            chatMap[key].lastMsg = msg;
          }
        }
      }
    }
  }

  // Carica info utente e auto per ogni chat
  const chatList = await Promise.all(
    Object.values(chatMap).map(async (chat) => {
      let userInfo = null;
      let carInfo = null;
      const normalizedUserId = (chat.userID || "").trim();
      userInfo = await fetchUser(normalizedUserId);
      try {
        carInfo = await pb.collection("cars").getOne(chat.productID);
      } catch (e) {
        console.error("Errore nel caricamento auto:", e);
      }
      return { ...chat, userID: normalizedUserId, userInfo, carInfo };
    })
  );

  chats.value = chatList;

  // Se non c'è una chat selezionata, seleziona la prima
  if (!selectedChat.value && chatList.length > 0) {
    await selectChat(chatList[0]);
  }
};

// Carica i messaggi per la chat selezionata
const fetchMessagesForChat = async (chat) => {
  if (!chat) return;
  const filter = `productID='${chat.productID}' && ((sender='${chat.userID}' && receiver='${ADMIN_ID}') || (sender='${ADMIN_ID}' && receiver='${chat.userID}'))`;
  const res = await pb
    .collection("messages")
    .getFullList({ filter, sort: "created" });
  messages.value = res;
  await nextTick();
  scrollToBottom();
};

const selectChat = async (chat) => {
  selectedChat.value = chat;
  // Se non abbiamo le info dell'utente, caricale
  const normalizedUserId = (chat.userID || "").trim();
  if (!chat.userInfo) {
    selectedChat.value.userInfo = await fetchUser(normalizedUserId);
  }
  await fetchMessagesForChat(chat);
};

const sendMessage = async () => {
  if (!selectedChat.value || !newMessage.value.trim()) return;
  await pb.collection("messages").create({
    sender: ADMIN_ID,
    receiver: selectedChat.value.userID,
    productID: selectedChat.value.productID,
    message: newMessage.value,
  });
  newMessage.value = "";
  await fetchMessagesForChat(selectedChat.value);
};

const scrollToBottom = () => {
  nextTick(() => {
    const chatBody = document.querySelector(".chat-body .messages");
    if (chatBody) {
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  });
};

const subscribeToMessages = () => {
  pb.collection("messages").subscribe("*", async ({ action, record }) => {
    await fetchChats();
    if (
      selectedChat.value &&
      record.productID === selectedChat.value.productID &&
      ((record.sender === selectedChat.value.userID &&
        record.receiver === ADMIN_ID) ||
        (record.sender === ADMIN_ID &&
          record.receiver === selectedChat.value.userID))
    ) {
      await fetchMessagesForChat(selectedChat.value);
    }
  });
};

const { currentUser } = useAuth();

onMounted(async () => {
  // Logga l'utente autenticato
  // console.log("Utente autenticato:", pb.authStore.model);
  // Se non autenticato, forza logout
  if (!pb.authStore.isValid) {
    alert(
      "Sessione scaduta o non autenticato. Effettua di nuovo il login come admin."
    );
    window.location.href = "/";
    return;
  }
  // Se non admin, mostra errore
  if (pb.authStore.model?.role !== "admin") {
    alert("Solo un utente admin può accedere a questa pagina.");
    window.location.href = "/";
    return;
  }
  try {
    await fetchChats();
    subscribeToMessages();
  } catch (e) {
    console.error("Errore in onMounted:", e);
    alert(
      "Errore nel caricamento delle chat. Controlla la console per dettagli."
    );
  }
});
</script>
