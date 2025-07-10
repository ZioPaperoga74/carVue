<template>
    <!-- Edit Pricing -->
    <div class="modal fade" id="edit_price1">
        <div class="modal-dialog modal-dialog-centered modal-md">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title mb-0">Edit Pricing</h5>
                    <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <i class="ti ti-x fs-16"></i>
                    </button>
                </div>
                <form @submit.prevent="submitForm">
                    <div class="modal-body pb-1">
                        <table class="table custom-table1">
                            <thead class="thead-white">
                                <tr>
                                    <th class="py-0">Extra Features</th>
                                    <th class="py-0">Pricing</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="fw-medium text-gray-9">Navigation</td>
                                    <td>		
                                        <div class="d-flex align-items-center">	
                                            <vue-select 
                                                :options="Navigation"
                                                v-model="selected"
                                                placeholder="One Time"
                                            />
                                            <div class="input-icon-start position-relative w-100 ms-2">
                                                <span class="input-icon-addon">
                                                    <i class="ti ti-currency-dollar"></i>
                                                </span>
                                                <input type="text" class="form-control" value="90">
                                            </div>
                                        </div>	
                                    </td>
                                </tr>	
                                <tr>
                                    <td class="fw-medium text-gray-9">Satellite Radio</td>
                                    <td>		
                                        <div class="d-flex align-items-center">
                                            <vue-select 
                                                :options="Navigation"
                                                v-model="selectedOne"
                                                placeholder="Per Day"
                                            />
                                            <div class="input-icon-start position-relative w-100 ms-2">
                                                <span class="input-icon-addon">
                                                    <i class="ti ti-currency-dollar"></i>
                                                </span>
                                                <input type="text" class="form-control" value="25">
                                            </div>
                                        </div>	
                                    </td>
                                </tr>		
                                <tr>
                                    <td class="fw-medium text-gray-9">Roadside Assistance</td>
                                    <td>		
                                        <div class="d-flex align-items-center">		
                                            <vue-select 
                                                :options="Navigation"
                                                v-model="selectedTwo"
                                                placeholder="Per Day"
                                            />
                                            <div class="input-icon-start position-relative w-100 ms-2">
                                                <span class="input-icon-addon">
                                                    <i class="ti ti-currency-dollar"></i>
                                                </span>
                                                <input type="text" class="form-control" value="47">
                                            </div>
                                        </div>	
                                    </td>
                                </tr>		
                                <tr>
                                    <td class="fw-medium text-gray-9">Express Check-in/out</td>
                                    <td>		
                                        <div class="d-flex align-items-center">	
                                            <vue-select 
                                                :options="Navigation"
                                                v-model="selectedThree"
                                                placeholder="Per Day"
                                            />
                                            <div class="input-icon-start position-relative w-100 ms-2">
                                                <span class="input-icon-addon">
                                                    <i class="ti ti-currency-dollar"></i>
                                                </span>
                                                <input type="text" class="form-control" value="75">
                                            </div>
                                        </div>	
                                    </td>
                                </tr>		
                                <tr>
                                    <td class="fw-medium text-gray-9">Child Safety Seats</td>
                                    <td>		
                                        <div class="d-flex align-items-center">	
                                            <vue-select 
                                                :options="Navigation"
                                                v-model="selectedFour"
                                                placeholder="Per Day"
                                            />
                                            <div class="input-icon-start position-relative w-100 ms-2">
                                                <span class="input-icon-addon">
                                                    <i class="ti ti-currency-dollar"></i>
                                                </span>
                                                <input type="text" class="form-control" value="22">
                                            </div>
                                        </div>	
                                    </td>
                                </tr>		
                                <tr>
                                    <td class="fw-medium text-gray-9">Roadside Assistance</td>
                                    <td>		
                                        <div class="d-flex align-items-center">		
                                            <vue-select 
                                                :options="Navigation"
                                                v-model="selectedFive"
                                                placeholder="Per Day"
                                            />
                                            <div class="input-icon-start position-relative w-100 ms-2">
                                                <span class="input-icon-addon">
                                                    <i class="ti ti-currency-dollar"></i>
                                                </span>
                                                <input type="text" class="form-control" value="48">
                                            </div>
                                        </div>	
                                    </td>
                                </tr>								
                            </tbody>
                        </table>
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
                <form @submit.prevent="submitForm">
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
                                    v-model="selectedSix"
                                    placeholder="Select"
                                />
                            </div>
                        </div>  
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Phone Number <span class="text-danger">*</span></label>
                                <input type="text" id="phone" name="phone" class="form-control">
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

    <!-- Add Client -->
    <div class="modal fade" id="add_client">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="mb-0">Create Client</h5>
                    <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <i class="ti ti-x fs-16"></i>
                    </button>
                </div>
                <div class="modal-body pb-1">
                    <div class="row">
                        <div class="mb-3">
                            <label class="form-label">Image <span class="text-danger">*</span></label>
                            <div class="d-flex align-items-center flex-wrap row-gap-3  mb-3">                                                
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
                        <div class="col-md-4">
                            <div class="mb-3">
                                <label class="form-label">Client Name <span class="text-danger">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                        </div>  
                        <div class="col-md-4">            
                            <div class="mb-3">
                                <label class="form-label">Date of Birth <span class="text-danger">*</span></label>
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
                                <label class="form-label">Gender <span class="text-danger">*</span></label>
                                <vue-select 
                                    :options="Gender"
                                    v-model="selectedSeven"
                                    placeholder="Select"
                                />
                            </div>
                        </div>            
                        <div class="col-md-4">
                            <div class="mb-3">
                                <label class="form-label">Language <span class="text-danger">*</span></label>
                                <vue-select 
                                    :options="Language"
                                    v-model="selectedEight"
                                    placeholder="Select"
                                />
                            </div>
                        </div>            
                        <div class="col-md-4">
                            <div class="mb-3">
                                <label class="form-label">Phone Number <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="phone1" name="phone">
                            </div>
                        </div>            
                        <div class="col-md-4">
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
                                <input type="text" class="form-control">
                            </div>
                        </div>  
                        <div class="col-md-4">            
                            <div class="mb-3">
                                <label class="form-label">Date of Issue <span class="text-danger">*</span></label>
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
                        <div class="col-md-4">            
                            <div class="mb-3">
                                <label class="form-label">Valid Date <span class="text-danger">*</span></label>
                                <div class="input-icon-end position-relative">
                                    <datepicker
                                        v-model="startdateFour"
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
    <!-- /Add Client -->
</template>

<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
const currentDateTwo = ref(new Date());
const currentDateThree = ref(new Date());
const currentDateFour = ref(new Date());
export default {
    data() {
        return {
            dateFormat: "dd-MM-yyyy",
            startdate: currentDate,
            startdateOne: currentDateOne,
            startdateTwo: currentDateTwo,
            startdateThree: currentDateThree,
            startdateFour: currentDateFour,
            selected: "One Time",
            selectedOne: "Per Day",
            selectedTwo: "Per Day",
            selectedThree: "Per Day",
            selectedFour: "Per Day",
            selectedFive: "Per Day",
            selectedSix: [],
            selectedSeven: [],
            selectedEight: [],
            Navigation: [
                {label: "One Time", value: "One Time"}, 
                {label: "Per Day", value: "Per Day"}, 
            ],
            Gender: [
                {label: "Select", value: "Select"}, 
                {label: "Male", value: "Male"}, 
                {label: "Female", value: "Female"}, 
            ],
            Language: [
                {label: "Select", value: "Select"}, 
                {label: "English", value: "English"}, 
                {label: "German", value: "German"}, 
                {label: "Frence", value: "Frence"}, 
            ]
        }
    },
    methods: {
        submitForm() {
            this.$router.push("/admin-template/bookings/add-quotations");
        },
    },
}
</script>