<template>
    <!-- Completed -->
    <div class="modal fade" id="reservation_completed">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content">
                <div class="modal-body text-center">
                    <form @submit.prevent="submitForm">
                        <span class="avatar avatar-lg bg-transparent-success rounded-circle text-success mb-3">
                            <i class="ti ti-check fs-26"></i>
                        </span>
                        <h4 class="mb-1">Created Successful</h4>
                        <p class="mb-3">Reservation created for the <span class="text-gray-9">“Ford Fiesta” </span> on <span class="text-gray-9">“24 Feb 2025”</span></p>
                        <div class="d-flex justify-content-center">
                            <button type="submit" class="btn btn-primary w-100">View Details</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- /Completed -->

    <!-- Edit Pricing -->
    <div class="modal fade" id="edit_price">
        <div class="modal-dialog modal-dialog-centered modal-md">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title mb-0">Edit Pricing</h5>
                    <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <i class="ti ti-x fs-16"></i>
                    </button>
                </div>
                <form @submit.prevent="submitFormOne">
                    <div class="modal-body pb-1">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Drivers <span class="text-danger">*</span></label>
                                    <div class="d-flex align-items-center mt-2">
                                        <a href="javascript:void(0);" class="avatar avatar-sm avatar-rounded me-2 flex-shrink-0"><img src="@/assets/admin/img/profiles/avatar-05.jpg" alt=""></a>
                                        <div>
                                            <a class="d-block fw-semibold" href="#">Reuben Keen</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Pricing <span class="text-danger">*</span></label>
                                    <input type="text" value="$ 90" class="form-control">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <div class="d-flex justify-content-center">
                            <a href="javascript:void(0);" class="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
                            <button type="submit" class="btn btn-primary">Save Changes</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- /Edit Pricing -->
</template>


<script>

export default {
    data() {
        return {
        };
    },
    methods: {
        submitForm() {
            this.$router.push("/admin-template/bookings/reservation-details");
        },
        submitFormOne() {
            this.$router.push("/admin-template/bookings/add-quotations");
        },
    },
};
</script>