<template>
    <div class="col-md-6" v-for="(item, index) in checkboxes" :key="index">
        <div class="custom-checkbox" :class="{ active: item.isChecked }" @click="toggleCheckbox(index)">
            <div class="form-check form-check-md">
                <input class="form-check-input" type="checkbox" :id="'custom-check-' + (index + 1)" v-model="item.isChecked" @click.stop>
            </div>
            <div class="d-flex align-items-center justify-content-between">
                <label class="form-check-label ms-2 ps-4" :for="'custom-check-' + (index + 1)">
                    <span class="fw-semibold text-gray-9 d-block mb-1">{{ item.title }}</span>
                    <span class="d-block">{{ item.description }}</span>
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
        { title: "Navigation", description: "Using GPS while travel", priceType: "Per Day", price: 10, isChecked: true },
        { title: "Wi-Fi Hotspot", description: "Constant portable internet", priceType: "Per Day", price: 10, isChecked: false },
        { title: "Fuel Pre-Purchase", description: "Full tank, return hassle-free", priceType: "One Time", price: 10, isChecked: false },
        { title: "Satellite Radio", description: "Unlimited premium music", priceType: "Per Day", price: 10, isChecked: false },
        { title: "USB Charger", description: "Fast charging for devices", priceType: "Per Day", price: 10, isChecked: false },
        { title: "Toll Pass", description: "Skip toll booth lines", priceType: "One Time", price: 10, isChecked: false },
        { title: "Dash Cam", description: "Records trips extra security", priceType: "Per Day", price: 10, isChecked: false },
        { title: "Express Check-in/out", description: "Fast pickup & return process", priceType: "Per Day", price: 10, isChecked: false },
        { title: "Child Safety Seats", description: "Secure infant/toddler car seat", priceType: "Per Day", price: 10, isChecked: true },
        { title: "Roadside Assistance", description: "24/7 emergency car support", priceType: "Per Day", price: 10, isChecked: false }
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