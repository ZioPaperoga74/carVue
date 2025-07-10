<template>
    <!-- Add Driver -->
	<div class="modal fade" id="add_driver">
		<div class="modal-dialog modal-dialog-centered modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="mb-0">Create Driver</h5>
					<button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
						<i class="ti ti-x fs-16"></i>
					</button>
				</div>
				<div class="modal-body pb-1">
					<div class="row">
						<div class="mb-3">
							<label class="form-label">Image <span class="text-danger">*</span></label>
							<div class="d-flex align-items-center flex-wrap row-gap-3">                                                
								<div class="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 flex-shrink-0 text-dark frames">
									<i class="ti ti-photo-up text-gray-4 fs-24"></i>
								</div>                                              
								<div class="profile-upload">
									<div class="profile-uploader d-flex align-items-center">
										<div class="drag-upload-btn btn btn-md btn-dark">
											<i class="ti ti-photo-up fs-14"></i>
											Upload
											<input type="file" class="form-control image-sign" multiple="">
										</div>
									</div>
									<div class="mt-2">
										<p class="fs-14">Upload Image size 180*180, within 5MB</p>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="mb-3">
								<label class="form-label">Driver Name <span class="text-danger">*</span></label>
								<input type="text" class="form-control">
							</div>
						</div>  
						<div class="col-md-6">
							<div class="mb-3">
								<label class="form-label">Gender <span class="text-danger">*</span></label>
								<vue-select 
									:options="Gender"
									v-model="selected"
									placeholder="Select"
								/>
							</div>
						</div>  
						<div class="col-md-6">
							<div class="mb-3">
								<label class="form-label">Phone Number <span class="text-danger">*</span></label>
								<vue-tel-input class="form-control" v-model="phone" mode="international" default-country="us"></vue-tel-input>
							</div>
						</div>            
						<div class="col-md-6">
							<div class="mb-3">
								<label class="form-label">Email <span class="text-danger">*</span></label>
								<input class="form-control" type="text">
							</div>
						</div>  
						<div class="col-md-12">
							<div class="mb-3">
								<label class="form-label">Address <span class="text-danger">*</span></label>
								<input class="form-control" type="text">
							</div>
						</div>   
                        <h6 class="fs-16 fw-medium mb-2">License Details</h6>   
						<div class="col-md-4">
							<div class="mb-3">
								<label class="form-label">Card Number <span class="text-danger">*</span></label>
								<input class="form-control" type="text">
							</div>
						</div>   
                        <div class="col-md-4">            
							<div class="mb-3">
								<label class="form-label">Date of Issue <span class="text-danger">*</span></label>
								<div class="input-icon-end position-relative">
									<datepicker
                                        v-model="startdate"
                                        class="form-control datetimepicker"
                                        :editable="true"
                                        :clearable="false"
                                        :input-format="dateFormat"
                                    />
									<span class="input-icon-addon">
										<i class="ti ti-calendar"></i>
									</span>
								</div>
							</div>
						</div>    
						<div class="col-md-4">            
							<div class="mb-3">
								<label class="form-label">Valid Date <span class="text-danger">*</span></label>
								<div class="input-icon-end position-relative">
									<datepicker
                                        v-model="startdateOne"
                                        class="form-control datetimepicker"
                                        :editable="true"
                                        :clearable="false"
                                        :input-format="dateFormat"
                                    />
									<span class="input-icon-addon">
										<i class="ti ti-calendar"></i>
									</span>
								</div>
							</div>
						</div>  
						<div class="col-md-12">
							<label class="form-label"> Document</label>
							<div class="document-upload text-center br-3 mb-3">
								<img src="@/assets/admin/img/icons/upload-icon.svg" alt="img" class="mb-2">
								<p class="mb-2">Drop your files here or <span class="text-info text-decoration-underline">Browse</span></p>
								<p class="fs-12 mb-0">Maximum size 50mb</p>
								<input type="file" class="form-control image-sign" multiple="" accept=".pdf, .txt, .doc, .docx">
							</div>  
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<div class="d-flex justify-content-center">
						<a href="javascript:void(0);" class="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
						<button type="submit" class="btn btn-primary">Create New</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- /Add Driver -->

	<!-- Edit Driver -->
	<div class="modal fade" id="edit_driver">
		<div class="modal-dialog modal-dialog-centered modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="mb-0">Edit Driver</h5>
					<button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
						<i class="ti ti-x fs-16"></i>
					</button>
				</div>
				<div class="modal-body pb-1">
					<div class="row">
						<div class="mb-3">
							<label class="form-label">Image <span class="text-danger">*</span></label>
							<div class="d-flex align-items-center flex-wrap row-gap-3">                                                
								<div class="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 p-2 flex-shrink-0 text-dark frames">
									<img src="@/assets/admin/img/customer/customer-01.jpg" class="img-fluid rounded" alt="img">
									<span class="avatar-badge bg-light text-danger m-1"><i class="ti ti-trash"></i></span>
								</div>                                              
								<div class="profile-upload">
									<div class="profile-uploader d-flex align-items-center">
										<div class="drag-upload-btn btn btn-md btn-dark">
											<i class="ti ti-photo-up fs-14"></i>
											Upload
											<input type="file" class="form-control image-sign" multiple="">
										</div>
									</div>
									<div class="mt-2">
										<p class="fs-14">Upload Image size 180*180, within 5MB</p>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="mb-3">
								<label class="form-label">Driver Name <span class="text-danger">*</span></label>
								<input type="text" class="form-control" value="Reuben Keen">
							</div>
						</div>  
						<div class="col-md-6">
							<div class="mb-3">
								<label class="form-label">Gender <span class="text-danger">*</span></label>
								<vue-select 
									:options="Gender"
									v-model="selectedOne"
									placeholder="Select"
								/>
							</div>
						</div>  
						<div class="col-md-6">
							<div class="mb-3">
								<label class="form-label">Phone Number <span class="text-danger">*</span></label>
								<vue-tel-input class="form-control" v-model="phone" mode="international" default-country="us"></vue-tel-input>
							</div>
						</div>            
						<div class="col-md-6">
							<div class="mb-3">
								<label class="form-label">Email <span class="text-danger">*</span></label>
								<input class="form-control" type="text" value="reuben@example.com">
							</div>
						</div>  
						<div class="col-md-12">
							<div class="mb-3">
								<label class="form-label">Address <span class="text-danger">*</span></label>
								<input class="form-control" type="text" value="2881 Jarvis Street">
							</div>
						</div>   
                        <h6 class="fs-16 fw-medium mb-2">License Details</h6>   
						<div class="col-md-4">
							<div class="mb-3">
								<label class="form-label">Card Number <span class="text-danger">*</span></label>
								<input class="form-control" type="text" value="DL123456789">
							</div>
						</div>   
                        <div class="col-md-4">            
							<div class="mb-3">
								<label class="form-label">Date of Issue <span class="text-danger">*</span></label>
								<div class="input-icon-end position-relative">
									<datepicker
                                        v-model="startdateTwo"
                                        class="form-control datetimepicker"
                                        :editable="true"
                                        :clearable="false"
                                        :input-format="dateFormat"
                                    />
									<span class="input-icon-addon">
										<i class="ti ti-calendar"></i>
									</span>
								</div>
							</div>
						</div>    
						<div class="col-md-4">            
							<div class="mb-3">
								<label class="form-label">Valid Date <span class="text-danger">*</span></label>
								<div class="input-icon-end position-relative">
									<datepicker
                                        v-model="startdateThree"
                                        class="form-control datetimepicker"
                                        :editable="true"
                                        :clearable="false"
                                        :input-format="dateFormat"
                                    />
									<span class="input-icon-addon">
										<i class="ti ti-calendar"></i>
									</span>
								</div>
							</div>
						</div>  
						<div class="col-md-12">
							<label class="form-label"> Document</label>
							<div class="document-upload text-center br-3 mb-3">
								<img src="@/assets/admin/img/icons/upload-icon.svg" alt="img" class="mb-2">
								<p class="mb-2">Drop your files here or <span class="text-info text-decoration-underline">Browse</span></p>
								<p class="fs-12 mb-0">Maximum size 50mb</p>
								<input type="file" class="form-control image-sign" multiple="" accept=".pdf, .txt, .doc, .docx">
							</div>  
						</div>
					</div>
				</div>
				<div class="modal-footer">
                    <div class="d-flex justify-content-between align-items-center w-100">
                        <div class="form-check form-check-md form-switch me-2">
                            <label class="form-check-label form-label mt-0 mb-0">
                            <input class="form-check-input form-label me-2" type="checkbox" role="switch" checked="">
                                Status
                            </label>
                        </div>
                        <div class="d-flex justify-content-center">
                            <a href="javascript:void(0);" class="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
                            <a href="javascript:void(0);" class="btn btn-primary">Save Changes</a>
                        </div>
                    </div>
				</div>
			</div>
		</div>
	</div>
	<!-- /Edit Driver -->


	<!-- Delete  -->
	<div class="modal fade" id="delete_driver">
		<div class="modal-dialog modal-dialog-centered modal-sm">
			<div class="modal-content">
				<div class="modal-body text-center">
					<span class="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
						<i class="ti ti-trash-x fs-26"></i>
					</span>
					<h4 class="mb-1">Delete Driver</h4>
					<p class="mb-3">Are you sure you want to delete Driver?</p>
					<div class="d-flex justify-content-center">
						<a href="javascript:void(0);" class="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
						<router-link to="/admin-template/manage/drivers" class="btn btn-primary">Yes, Delete</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- /Delete -->

</template>

<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
const currentDateTwo = ref(new Date());
const currentDateThree = ref(new Date());

import { VueTelInput } from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css'

export default {
    components: {
      VueTelInput,
    },
    data() {
        return {
            selected: null,
            selectedOne: "Male",
            Gender: [
                { label: "Select", value: "Select" },
                { label: "Male", value: "Male" },
                { label: "Female", value: "Female" },
            ],
            dateFormat: "dd-MM-yyyy",
            startdate: currentDate,
            startdateOne: currentDateOne,
            startdateTwo: currentDateTwo,
            startdateThree: currentDateThree,
        }
    },
    setup() {
        const phone = ref(null);
        return {
            phone
        };
    },
}
</script>