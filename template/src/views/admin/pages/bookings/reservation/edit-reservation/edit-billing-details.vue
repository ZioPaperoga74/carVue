<template>
    <div class="col-md-6" v-for="(item, index) in checkboxes" :key="index">
        <div class="custom-checkbox" :class="{ active: item.isChecked }" @click="toggleCheckbox(index)">
            <div class="form-check form-check-md">
                <input class="form-check-input" type="checkbox" :id="'custom-check-' + (index + 1)" v-model="item.isChecked" @click.stop>
            </div>
            <div class="d-flex align-items-center justify-content-between">
                <label class="form-check-label ms-2 ps-4" :for="'custom-check-' + (index + 1)">
                    <span class="fw-semibold text-gray-9 d-block mb-1">{{ item.title }}</span>
                    <span class="d-block text-info">{{ item.description }}<i class="ti ti-info-circle-filled text-gray-5 ms-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="No additional charges for emergency roadside services"></i></span>
                </label>
                <div class="text-end">
                    <p class="mb-1">{{ item.priceType }}</p>
                    <h6>${{ item.price }}</h6>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      checkboxes: [
        { title: "Full Premium Insurance", description: "+4 Benefits", priceType: "Onetime Ride", price: 200, isChecked: true },
        { title: "Satellite Radio", description: "+6 Benefits", priceType: "Onetime Ride", price: 250, isChecked: false },
      ]
    };
  },
  methods: {
    toggleCheckbox(index) {
      this.checkboxes[index].isChecked = !this.checkboxes[index].isChecked;
    }
  }
};
</script>