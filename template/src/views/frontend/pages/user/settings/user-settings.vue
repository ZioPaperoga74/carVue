<template>
  <div>
    <layouts-header></layouts-header>
    <user-breadcrumb :title="title" :text="text" :text1="text1" />
    <user-tabset></user-tabset>
    <div class="content">
      <div class="container">
        <!-- Content Header -->
        <div class="content-header content-settings-header">
          <h4>Settings</h4>
        </div>
        <!-- /Content Header -->
        <div class="row">
          <!-- Settings Menu -->
          <settings-sidebar></settings-sidebar>
          <!-- /Settings Menu -->
          <!-- Settings Details -->
          <div class="col-lg-9">
            <div class="settings-info">
              <div class="settings-sub-heading">
                <h4>Profile</h4>
              </div>
              <form @submit.prevent="onSave">
                <!-- Basic Info -->
                <div class="profile-info-grid">
                  <div class="profile-info-header">
                    <h5>Basic Information</h5>
                    <p>Information about user</p>
                  </div>
                  <div class="profile-inner">
                    <div class="profile-info-pic">
                      <div class="profile-info-img">
                        <img
                          src="@/assets/img/profiles/avatar-15.jpg"
                          alt="Profile"
                        />
                        <div class="profile-edit-info">
                          <a href="javascript:void(0)">
                            <i class="feather-edit me-1"></i>
                          </a>
                          <a href="javascript:void(0)">
                            <i class="feather-trash-2"></i>
                          </a>
                        </div>
                      </div>
                      <div class="profile-info-content">
                        <h6>Profile picture</h6>
                        <p>PNG, JPEG under 15 MB</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-4">
                        <div class="profile-form-group">
                          <label
                            >User Name <span class="text-danger">*</span></label
                          >
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter User Name"
                            v-model="form.name"
                            :disabled="!isEditing"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="profile-form-group">
                          <label
                            >Email <span class="text-danger">*</span></label
                          >
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter Email"
                            v-model="form.email"
                            :disabled="!isEditing"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- /Basic Info -->
                <!-- Profile Submit -->
                <div class="profile-submit-btn">
                  <button
                    v-if="isEditing"
                    type="button"
                    class="btn btn-secondary me-2"
                    @click="onCancel"
                  >
                    Cancel
                  </button>
                  <button
                    v-if="isEditing"
                    type="submit"
                    class="btn btn-primary me-2"
                  >
                    Save Changes
                  </button>
                  <button
                    v-else
                    type="button"
                    class="btn btn-primary"
                    @click="onEdit"
                  >
                    Modifica
                  </button>
                </div>
                <!-- /Profile Submit -->
              </form>
            </div>
          </div>
          <!-- /Settings Details -->
        </div>
      </div>
    </div>
    <layout-footer></layout-footer>
  </div>
</template>
<script>
import { ref, reactive } from "vue";
import { useAuth } from "@/composables/useAuth";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

export default {
  setup() {
    const { currentUser } = useAuth();
    const title = ref("User Settings");
    const text = "Home";
    const text1 = ref("User Settings");

    // Stato del form
    const isEditing = ref(false);
    const original = reactive({
      name: currentUser.value?.name || "",
      email: currentUser.value?.email || "",
    });
    const form = reactive({
      name: currentUser.value?.name || "",
      email: currentUser.value?.email || "",
    });

    // Quando clicchi Modifica
    function onEdit() {
      isEditing.value = true;
    }

    // Quando clicchi Cancel
    function onCancel() {
      form.name = original.name;
      form.email = original.email;
      isEditing.value = false;
    }

    // Quando clicchi Save Changes
    async function onSave() {
      try {
        await pb.collection("users").update(currentUser.value.id, {
          name: form.name,
          email: form.email,
        });
        // Ricarica i dati aggiornati dell'utente da PocketBase
        const updatedUser = await pb
          .collection("users")
          .getOne(currentUser.value.id);
        currentUser.value = updatedUser;
        original.name = form.name;
        original.email = form.email;
        isEditing.value = false;
        // alert("Profilo aggiornato con successo!");
      } catch (error) {
        alert("Errore durante il salvataggio: " + (error?.message || error));
      }
    }

    return {
      title,
      text,
      text1,
      form,
      isEditing,
      onEdit,
      onCancel,
      onSave,
    };
  },
};
</script>
