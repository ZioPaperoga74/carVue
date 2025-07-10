<template>
    <!-- Add Location -->
	<div class="modal fade" id="add_location">
		<div class="modal-dialog modal-dialog-centered modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="mb-0">Create Location</h5>
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
						<div class="col-md-12">
							<div class="mb-3">
								<label class="form-label">Location Title <span class="text-danger">*</span></label>
								<input type="text" class="form-control">
							</div>
						</div>  
						<div class="col-md-6">
							<div class="mb-3">
								<label class="form-label">Email <span class="text-danger">*</span></label>
								<input type="text" class="form-control">
							</div>
						</div>            
						<div class="col-md-6">
							<div class="mb-3">
								<label class="form-label">Phone Number <span class="text-danger">*</span></label>
								<vue-tel-input class="form-control" v-model="phone" mode="international" default-country="us"></vue-tel-input>
							</div>
						</div>    
						<div class="col-md-12">
							<div class="mb-3">
								<label class="form-label">Location <span class="text-danger">*</span></label>
								<input class="form-control" type="text">
							</div>
						</div>   
						<div class="col-md-6">
							<div class="mb-3">
								<label class="form-label">Country <span class="text-danger">*</span></label>
                                <vue-select 
                                    :options="Country"
                                    v-model="selected"
                                    placeholder="Select"
                                />
							</div>
						</div>   
						<div class="col-md-6">
							<div class="mb-3">
								<label class="form-label">State <span class="text-danger">*</span></label>
                                <vue-select 
                                    :options="State"
                                    v-model="selectedOne"
                                    placeholder="Select"
                                />
							</div>
						</div>   
						<div class="col-md-6">
							<div class="mb-3">
								<label class="form-label">City <span class="text-danger">*</span></label>
                                <vue-select 
                                    :options="City"
                                    v-model="selectedTwo"
                                    placeholder="Select"
                                />
							</div>
						</div>   
						<div class="col-md-6">
							<div class="mb-3">
								<label class="form-label">Pincode <span class="text-danger">*</span></label>
								<input class="form-control" type="text">
							</div>
						</div>   
                        <label class="form-label mb-2">Working Days <span class="text-danger">*</span></label>   
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <div class="form-check form-check-md form-switch me-2">
                                <label class="form-check-label mt-0 mb-0 text-gray-5">
                                <input class="form-check-input form-label me-2" type="checkbox" role="switch">
                                    Monday
                                </label>
                            </div>
                            <div class="d-flex align-items-center">
                                <div class="input-icon-start position-relative flex-fill  me-3">
                                    <span class="input-icon-addon">
                                        <i class="ti ti-clock"></i>
                                    </span>
                                    <a-time-picker class="form-control timepicker bg-light" v-model:value="value" />
                                </div>
                                <p class="text-gray-5 me-3 mb-0 fs-14">to</p>
                                <div class="input-icon-start position-relative flex-fill bg-light">
                                    <span class="input-icon-addon">
                                        <i class="ti ti-clock"></i>
                                    </span>
                                    <a-time-picker class="form-control timepicker bg-light" v-model:value="valueOne" />
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <div class="form-check form-check-md form-switch me-2">
                                <label class="form-check-label mt-0 mb-0 text-gray-5">
                                <input class="form-check-input form-label me-2" type="checkbox" role="switch">
                                    Tuesday
                                </label>
                            </div>
                            <div class="d-flex align-items-center">
                                <div class="input-icon-start position-relative flex-fill  me-3">
                                    <span class="input-icon-addon">
                                        <i class="ti ti-clock"></i>
                                    </span>
                                    <a-time-picker class="form-control timepicker bg-light" v-model:value="valueTwo" />
                                </div>
                                <p class="text-gray-5 me-3 mb-0 fs-14">to</p>
                                <div class="input-icon-start position-relative flex-fill bg-light">
                                    <span class="input-icon-addon">
                                        <i class="ti ti-clock"></i>
                                    </span>
                                    <a-time-picker class="form-control timepicker bg-light" v-model:value="valueThree" />
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <div class="form-check form-check-md form-switch me-2">
                                <label class="form-check-label mt-0 mb-0 text-gray-5">
                                <input class="form-check-input form-label me-2" type="checkbox" role="switch">
                                Wednesday
                                </label>
                            </div>
                            <div class="d-flex align-items-center">
                                <div class="input-icon-start position-relative flex-fill  me-3">
                                    <span class="input-icon-addon">
                                        <i class="ti ti-clock"></i>
                                    </span>
                                    <a-time-picker class="form-control timepicker bg-light" v-model:value="valueFour" />
                                </div>
                                <p class="text-gray-5 me-3 mb-0 fs-14">to</p>
                                <div class="input-icon-start position-relative flex-fill bg-light">
                                    <span class="input-icon-addon">
                                        <i class="ti ti-clock"></i>
                                    </span>
                                    <a-time-picker class="form-control timepicker bg-light" v-model:value="valueFive" />
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <div class="form-check form-check-md form-switch me-2">
                                <label class="form-check-label mt-0 mb-0 text-gray-5">
                                <input class="form-check-input form-label me-2" type="checkbox" role="switch">
                                    Thursday
                                </label>
                            </div>
                            <div class="d-flex align-items-center">
                                <div class="input-icon-start position-relative flex-fill  me-3">
                                    <span class="input-icon-addon">
                                        <i class="ti ti-clock"></i>
                                    </span>
                                    <a-time-picker class="form-control timepicker bg-light" v-model:value="valueSix" />
                                </div>
                                <p class="text-gray-5 me-3 mb-0 fs-14">to</p>
                                <div class="input-icon-start position-relative flex-fill bg-light">
                                    <span class="input-icon-addon">
                                        <i class="ti ti-clock"></i>
                                    </span>
                                    <a-time-picker class="form-control timepicker bg-light" v-model:value="valueSeven" />
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <div class="form-check form-check-md form-switch me-2">
                                <label class="form-check-label mt-0 mb-0 text-gray-5">
                                <input class="form-check-input form-label me-2" type="checkbox" role="switch">
                                    Friday
                                </label>
                            </div>
                            <div class="d-flex align-items-center">
                                <div class="input-icon-start position-relative flex-fill  me-3">
                                    <span class="input-icon-addon">
                                        <i class="ti ti-clock"></i>
                                    </span>
                                    <a-time-picker class="form-control timepicker bg-light" v-model:value="valueEight" />
                                </div>
                                <p class="text-gray-5 me-3 mb-0 fs-14">to</p>
                                <div class="input-icon-start position-relative flex-fill bg-light">
                                    <span class="input-icon-addon">
                                        <i class="ti ti-clock"></i>
                                    </span>
                                    <a-time-picker class="form-control timepicker bg-light" v-model:value="valueNine" />
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <div class="form-check form-check-md form-switch me-2">
                                <label class="form-check-label mt-0 mb-0 text-gray-5">
                                <input class="form-check-input form-label me-2" type="checkbox" role="switch">
                                    Saturday
                                </label>
                            </div>
                            <div class="d-flex align-items-center">
                                <div class="input-icon-start position-relative flex-fill  me-3">
                                    <span class="input-icon-addon">
                                        <i class="ti ti-clock"></i>
                                    </span>
                                    <a-time-picker class="form-control timepicker bg-light" v-model:value="valueTen" />
                                </div>
                                <p class="text-gray-5 me-3 mb-0 fs-14">to</p>
                                <div class="input-icon-start position-relative flex-fill bg-light">
                                    <span class="input-icon-addon">
                                        <i class="ti ti-clock"></i>
                                    </span>
                                    <a-time-picker class="form-control timepicker bg-light" v-model:value="valueEleven" />
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <div class="form-check form-check-md form-switch me-2">
                                <label class="form-check-label mt-0 mb-0 text-gray-5">
                                <input class="form-check-input form-label me-2" type="checkbox" role="switch">
                                    Sunday
                                </label>
                            </div>
                            <div class="d-flex align-items-center">
                                <div class="input-icon-start position-relative flex-fill  me-3">
                                    <span class="input-icon-addon">
                                        <i class="ti ti-clock"></i>
                                    </span>
                                    <a-time-picker class="form-control timepicker bg-light" v-model:value="valueTwele" />
                                </div>
                                <p class="text-gray-5 me-3 mb-0 fs-14">to</p>
                                <div class="input-icon-start position-relative flex-fill bg-light">
                                    <span class="input-icon-addon">
                                        <i class="ti ti-clock"></i>
                                    </span>
                                    <a-time-picker class="form-control timepicker bg-light" v-model:value="valueThirteen" />
                                </div>
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
	<div class="modal fade" id="edit_location">
		<div class="modal-dialog modal-dialog-centered modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="mb-0">Edit Location</h5>
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
									<img src="@/assets/admin/img/locations/location-01.jpg" class="img-fluid rounded" alt="img">
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
						<div class="col-md-12">
							<div class="mb-3">
								<label class="form-label">Location Title <span class="text-danger">*</span></label>
								<input type="text" class="form-control" value="Johnson Dealer Zone">
							</div>
						</div>  
						<div class="col-md-6">
							<div class="mb-3">
								<label class="form-label">Email <span class="text-danger">*</span></label>
								<input type="text" class="form-control" value="johnsondealer@example.com">
							</div>
						</div>            
						<div class="col-md-6">
							<div class="mb-3">
								<label class="form-label">Phone Number <span class="text-danger">*</span></label>
								<vue-tel-input class="form-control" v-model="phone" mode="international" default-country="us"></vue-tel-input>
							</div>
						</div>    
						<div class="col-md-12">
							<div class="mb-3">
								<label class="form-label">Location <span class="text-danger">*</span></label>
								<input class="form-control" type="text" value="2881 Jarvis Street">
							</div>
						</div>   
						<div class="col-md-6">
							<div class="mb-3">
								<label class="form-label">Country <span class="text-danger">*</span></label>
                                <vue-select 
                                    :options="Country"
                                    v-model="selectedThree"
                                    placeholder="United States"
                                />
							</div>
						</div>   
						<div class="col-md-6">
							<div class="mb-3">
								<label class="form-label">State <span class="text-danger">*</span></label>
                                <vue-select 
                                    :options="State"
                                    v-model="selectedFour"
                                    placeholder="California"
                                />
							</div>
						</div>   
						<div class="col-md-6">
							<div class="mb-3">
								<label class="form-label">City <span class="text-danger">*</span></label>
                                <vue-select 
                                    :options="City"
                                    v-model="selectedFive"
                                    placeholder="Los Angeles"
                                />
							</div>
						</div>   
						<div class="col-md-6">
							<div class="mb-3">
								<label class="form-label">Pincode <span class="text-danger">*</span></label>
								<input class="form-control" type="text">
							</div>
						</div>   
                        <label class="form-label mb-2">Working Days <span class="text-danger">*</span></label>   
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <div class="form-check form-check-md form-switch me-2">
                                <label class="form-check-label mt-0 mb-0 text-gray-5">
                                <input class="form-check-input form-label me-2" type="checkbox" role="switch" checked>
                                    Monday
                                </label>
                            </div>
                            <div class="d-flex align-items-center">
                                <div class="input-icon-start position-relative flex-fill  me-3">
                                    <span class="input-icon-addon">
                                        <i class="ti ti-clock"></i>
                                    </span>
                                    <a-time-picker class="form-control timepicker bg-light" v-model:value="value" />
                                </div>
                                <p class="text-gray-5 me-3 mb-0 fs-14">to</p>
                                <div class="input-icon-start position-relative flex-fill">
                                    <span class="input-icon-addon">
                                        <i class="ti ti-clock"></i>
                                    </span>
                                    <a-time-picker class="form-control timepicker bg-light" v-model:value="valueOne" />
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <div class="form-check form-check-md form-switch me-2">
                                <label class="form-check-label mt-0 mb-0 text-gray-5">
                                <input class="form-check-input form-label me-2" type="checkbox" role="switch" checked>
                                    Tuesday
                                </label>
                            </div>
                            <div class="d-flex align-items-center">
                                <div class="input-icon-start position-relative flex-fill  me-3">
                                    <span class="input-icon-addon">
                                        <i class="ti ti-clock"></i>
                                    </span>
                                    <a-time-picker class="form-control timepicker bg-light" v-model:value="valueTwo" />
                                </div>
                                <p class="text-gray-5 me-3 mb-0 fs-14">to</p>
                                <div class="input-icon-start position-relative flex-fill">
                                    <span class="input-icon-addon">
                                        <i class="ti ti-clock"></i>
                                    </span>
                                    <a-time-picker class="form-control timepicker bg-light" v-model:value="valueThree" />
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <div class="form-check form-check-md form-switch me-2">
                                <label class="form-check-label mt-0 mb-0 text-gray-5">
                                <input class="form-check-input form-label me-2" type="checkbox" role="switch" checked>
                                Wednesday
                                </label>
                            </div>
                            <div class="d-flex align-items-center">
                                <div class="input-icon-start position-relative flex-fill  me-3">
                                    <span class="input-icon-addon">
                                        <i class="ti ti-clock"></i>
                                    </span>
                                    <a-time-picker class="form-control timepicker bg-light" v-model:value="valueFour" />
                                </div>
                                <p class="text-gray-5 me-3 mb-0 fs-14">to</p>
                                <div class="input-icon-start position-relative flex-fill">
                                    <span class="input-icon-addon">
                                        <i class="ti ti-clock"></i>
                                    </span>
                                    <a-time-picker class="form-control timepicker bg-light" v-model:value="valueFive" />
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <div class="form-check form-check-md form-switch me-2">
                                <label class="form-check-label mt-0 mb-0 text-gray-5">
                                <input class="form-check-input form-label me-2" type="checkbox" role="switch" checked>
                                    Thursday
                                </label>
                            </div>
                            <div class="d-flex align-items-center">
                                <div class="input-icon-start position-relative flex-fill  me-3">
                                    <span class="input-icon-addon">
                                        <i class="ti ti-clock"></i>
                                    </span>
                                    <a-time-picker class="form-control timepicker bg-light" v-model:value="valueSix" />
                                </div>
                                <p class="text-gray-5 me-3 mb-0 fs-14">to</p>
                                <div class="input-icon-start position-relative flex-fill">
                                    <span class="input-icon-addon">
                                        <i class="ti ti-clock"></i>
                                    </span>
                                    <a-time-picker class="form-control timepicker bg-light" v-model:value="valueSeven" />
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <div class="form-check form-check-md form-switch me-2">
                                <label class="form-check-label mt-0 mb-0 text-gray-5">
                                <input class="form-check-input form-label me-2" type="checkbox" role="switch" checked>
                                    Friday
                                </label>
                            </div>
                            <div class="d-flex align-items-center">
                                <div class="input-icon-start position-relative flex-fill  me-3">
                                    <span class="input-icon-addon">
                                        <i class="ti ti-clock"></i>
                                    </span>
                                    <a-time-picker class="form-control timepicker bg-light" v-model:value="valueEight" />
                                </div>
                                <p class="text-gray-5 me-3 mb-0 fs-14">to</p>
                                <div class="input-icon-start position-relative flex-fill ">
                                    <span class="input-icon-addon">
                                        <i class="ti ti-clock"></i>
                                    </span>
                                    <a-time-picker class="form-control timepicker bg-light" v-model:value="valueNine" />
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <div class="form-check form-check-md form-switch me-2">
                                <label class="form-check-label mt-0 mb-0 text-gray-5">
                                <input class="form-check-input form-label me-2" type="checkbox" role="switch">
                                    Saturday
                                </label>
                            </div>
                            <div class="d-flex align-items-center">
                                <div class="input-icon-start position-relative flex-fill  me-3">
                                    <span class="input-icon-addon">
                                        <i class="ti ti-clock"></i>
                                    </span>
                                    <a-time-picker class="form-control timepicker bg-light" v-model:value="valueTen" />
                                </div>
                                <p class="text-gray-5 me-3 mb-0 fs-14">to</p>
                                <div class="input-icon-start position-relative flex-fill bg-light">
                                    <span class="input-icon-addon">
                                        <i class="ti ti-clock"></i>
                                    </span>
                                    <a-time-picker class="form-control timepicker bg-light" v-model:value="valueEleven" />
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <div class="form-check form-check-md form-switch me-2">
                                <label class="form-check-label mt-0 mb-0 text-gray-5">
                                <input class="form-check-input form-label me-2" type="checkbox" role="switch">
                                    Sunday
                                </label>
                            </div>
                            <div class="d-flex align-items-center">
                                <div class="input-icon-start position-relative flex-fill  me-3">
                                    <span class="input-icon-addon">
                                        <i class="ti ti-clock"></i>
                                    </span>
                                    <a-time-picker class="form-control timepicker bg-light" v-model:value="valueTwele" />
                                </div>
                                <p class="text-gray-5 me-3 mb-0 fs-14">to</p>
                                <div class="input-icon-start position-relative flex-fill bg-light">
                                    <span class="input-icon-addon">
                                        <i class="ti ti-clock"></i>
                                    </span>
                                    <a-time-picker class="form-control timepicker bg-light" v-model:value="valueThirteen" />
                                </div>
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
	<div class="modal fade" id="delete_location">
		<div class="modal-dialog modal-dialog-centered modal-sm">
			<div class="modal-content">
				<div class="modal-body text-center">
					<span class="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
						<i class="ti ti-trash-x fs-26"></i>
					</span>
					<h4 class="mb-1">Delete Location</h4>
					<p class="mb-3">Are you sure you want to delete location?</p>
					<div class="d-flex justify-content-center">
						<a href="javascript:void(0);" class="btn btn-light me-3" data-bs-dismiss="modal">Cancel</a>
						<router-link to="/admin-template/manage/locations" class="btn btn-primary">Yes, Delete</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- /Delete -->
</template>

<script>
import { ref } from "vue";
const value = ref();
const valueOne = ref();
const valueTwo = ref();
const valueThree = ref();
const valueFour = ref();
const valueFive = ref();
const valueSix = ref();
const valueSeven = ref();
const valueEight = ref();
const valueNine = ref();
const valueTen = ref();
const valueEleven = ref();
const valueTwele = ref();
const valueThirteen = ref();

import { VueTelInput } from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css'

export default{
    components: {
      VueTelInput,
    },
    data(){
        return{
            selected: [],
            selectedOne: [],
            selectedTwo: [],
            selectedThree: "United States",
            selectedFour: "California",
            selectedFive: "Los Angeles",
            Country: [
                {label: "Select", value: "Select"}, 
                {label: "United States", value: "United States"}, 
                {label: "Canada", value: "Canada"}, 
                {label: "Germany", value: "Germany"}, 
            ],
            State: [
                {label: "Select", value: "Select"}, 
                {label: "California", value: "California"}, 
                {label: "New York", value: "New York"}, 
                {label: "Texas", value: "Texas"}, 
            ],
            City: [
                {label: "Select", value: "Select"}, 
                {label: "Los Angeles", value: "Los Angeles"}, 
                {label: "New York City", value: "New York City"}, 
                {label: "Houston", value: "Houston"}, 
            ],
            value,
            valueOne,
            valueTwo,
            valueThree,
            valueFour,
            valueFive,
            valueSix,
            valueSeven,
            valueEight,
            valueNine,
            valueTen,
            valueEleven,
            valueTwele,
            valueThirteen,
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