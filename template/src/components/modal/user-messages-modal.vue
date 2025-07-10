<template>
  <!-- Voice Call Modal -->
  <div class="modal fade call-modal" id="voice_call">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <!-- Outgoing Call -->
          <div class="call-box incoming-box">
            <div class="call-wrapper">
              <div class="call-inner">
                <div class="call-user">
                  <img
                    alt="User Image"
                    src="@/assets/img/profiles/avatar-08.jpg"
                    class="call-avatar"
                  />
                  <h4>Darren Elder</h4>
                  <span>Connecting...</span>
                </div>
                <div class="call-items">
                  <a
                    href="javascript:void(0);"
                    class="btn call-item call-end"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    ><i class="feather-phone-off"></i
                  ></a>
                  <a href="javascript:void(0);" class="btn call-item call-start"
                    ><i class="feather-phone"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <!-- Outgoing Call -->
        </div>
      </div>
    </div>
  </div>
  <!-- /Voice Call Modal -->

  <!-- Video Call Modal -->
  <div class="modal fade call-modal" id="video_call">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <!-- Incoming Call -->
          <div class="call-box incoming-box">
            <div class="call-wrapper">
              <div class="call-inner">
                <div class="call-user">
                  <img
                    class="call-avatar"
                    src="@/assets/img/profiles/avatar-08.jpg"
                    alt="User Image"
                  />
                  <h4>Darren Elder</h4>
                  <span>Calling ...</span>
                </div>
                <div class="call-items">
                  <a
                    href="javascript:void(0);"
                    class="btn call-item call-end"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    ><i class="feather-phone-off"></i
                  ></a>
                  <a href="javascript:void(0);" class="btn call-item call-start"
                    ><i class="feather-video"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <!-- /Incoming Call -->
        </div>
      </div>
    </div>
  </div>
  <!-- Video Call Modal -->
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
}
</script>