<template>
  <div class="custom-datatable-filter table-responsive brandstable country-table">
    <a-table class="table datatable" :columns="columns" :data-source="data">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'INVOICENO'">
          <router-link to="/admin-template/finance/invoice-details"
            >#INV12345</router-link
          >
        </template>
        <template v-else-if="column.key === 'CAR'">
          <div class="d-flex align-items-center">
            <router-link to="car-details" class="avatar me-2 flex-shrink-0"
              ><img :src="getImageURL(record.CARIMAGE)" alt=""
            /></router-link>
            <div>
              <router-link class="d-block fw-semibold" to="car-details">{{
                record.CAR
              }}</router-link>
              <span class="fs-13">{{ record.CAROWNER }}</span>
            </div>
          </div>
        </template>
        <template v-else-if="column.key === 'CUSTOMER'">
          <div class="d-flex align-items-center">
            <router-link
              to="customer-details"
              class="avatar avatar-rounded me-2 flex-shrink-0"
              ><img :src="getImageURLOne(record.IMAGE)" alt=""
            /></router-link>
            <div>
              <a class="d-block fw-semibold" to="customer-details">{{
                record.CUSTOMER
              }}</a>
              <span class="badge bg-secondary-transparent rounded-pill">{{
                record.CUSTOMERNAME
              }}</span>
            </div>
          </div>
        </template>

        <template v-else-if="column.key === 'STATUS'">
          <span
            class="d-inline-flex align-items-center badge-sm"
            :class="[
              'badge',
              {
                'badge badge-soft-success': record.STATUS === 'Completed',
                'badge badge-soft-warning': record.STATUS === 'Confirmed',
                'badge badge-soft-violet': record.STATUS === 'In Rental',
                'badge badge-soft-danger': record.STATUS === 'Rejected',
              },
            ]"
          >
            <i
              class="ti ti-point-filled"
              :class="[
                'me-1',
                {
                  'text-success': record.STATUS === 'Completed',
                  'text-warning': record.STATUS === 'Confirmed',
                  'text-violet': record.STATUS === 'In Rental',
                  'text-danger': record.STATUS === 'Rejected',
                },
              ]"
            ></i
            >{{ record.STATUS }}
          </span>
        </template>
      </template>
    </a-table>
  </div>
</template>
<script>
const columns = [
  {
    title: "INVOICE NO",
    dataIndex: "INVOICENO",
    key: "INVOICENO",
    sorter: {
      compare: (a, b) => {
        a = a.INVOICENO.toLowerCase();
        b = b.INVOICENO.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "CAR",
    dataIndex: "CAR",
    key: "CAR",
    sorter: {
      compare: (a, b) => {
        a = a.CAR.toLowerCase();
        b = b.CAR.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "CUSTOMER",
    dataIndex: "CUSTOMER",
    key: "CUSTOMER",
    sorter: {
      compare: (a, b) => {
        a = a.CUSTOMER.toLowerCase();
        b = b.CUSTOMER.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "AMOUNT",
    dataIndex: "AMOUNT",
    key: "AMOUNT",
    sorter: {
      compare: (a, b) => {
        a = a.AMOUNT.toLowerCase();
        b = b.AMOUNT.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "DATE",
    dataIndex: "DATE",
    key: "DATE",
    sorter: {
      compare: (a, b) => {
        a = a.DATE.toLowerCase();
        b = b.DATE.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "STATUS",
    dataIndex: "STATUS",
    key: "STATUS",
    sorter: {
      compare: (a, b) => {
        a = a.STATUS.toLowerCase();
        b = b.STATUS.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
];
const data = [
  {
    INVOICENO: "#INV12345",
    CAR: "Ford Endeavour",
    CARIMAGE: "car-01.jpg",
    CAROWNER: "Sedan",
    IMAGE: "customer-01.jpg",
    CUSTOMER: "Reuben Keen",
    CUSTOMERNAME: "Client",
    AMOUNT: "$120",
    DATE: "24 Jan 2025",
    STATUS: "Completed",
  },
  {
    INVOICENO: "#INV12346",
    CAR: "Ferrari 458 MM",
    CARIMAGE: "car-02.jpg",
    CAROWNER: "Convertible",
    IMAGE: "customer-02.jpg",
    CUSTOMER: "William Jones",
    CUSTOMERNAME: "Company",
    AMOUNT: "$85",
    DATE: "19 Dec 2024",
    STATUS: "Confirmed",
  },
  {
    INVOICENO: "#INV12347",
    CAR: "Ford Mustang",
    CARIMAGE: "car-03.jpg",
    CAROWNER: "Coupe",
    IMAGE: "customer-03.jpg",
    CUSTOMER: "Leonard Jandreau",
    CUSTOMERNAME: "Company",
    AMOUNT: "$250",
    DATE: "11 Dec 2024",
    STATUS: "In Rental",
  },
  {
    INVOICENO: "#INV12348",
    CAR: "Toyota Tacoma 4",
    CARIMAGE: "car-04.jpg",
    CAROWNER: "Hatchback",
    IMAGE: "customer-04.jpg",
    CUSTOMER: "Adam Bolden",
    CUSTOMERNAME: "Client",
    AMOUNT: "$175",
    DATE: "29 Nov 2024",
    STATUS: "Confirmed",
  },
  {
    INVOICENO: "#INV12349",
    CAR: "Chevrolet Truck",
    CARIMAGE: "car-05.jpg",
    CAROWNER: "Sedan",
    IMAGE: "customer-05.jpg",
    CUSTOMER: "Harvey Jimenez",
    CUSTOMERNAME: "Company",
    AMOUNT: "$200",
    DATE: "03 Nov 2024",
    STATUS: "Rejected",
  },
  {
    INVOICENO: "#INV12350",
    CAR: "Etios Carmen",
    CARIMAGE: "car-06.jpg",
    CAROWNER: "Hatchback",
    IMAGE: "customer-06.jpg",
    CUSTOMER: "William Ward",
    CUSTOMERNAME: "Client",
    AMOUNT: "$90",
    DATE: "31 Oct 2024",
    STATUS: "Completed",
  },
  {
    INVOICENO: "#INV12351",
    CAR: "Acura Sport",
    CARIMAGE: "car-07.jpg",
    CAROWNER: "Crossover",
    IMAGE: "customer-07.jpg",
    CUSTOMER: "Norman Coleman",
    CUSTOMERNAME: "Client",
    AMOUNT: "$160",
    DATE: "15 Oct 2024",
    STATUS: "Confirmed",
  },
  {
    INVOICENO: "#INV12352",
    CAR: "Kia Soul 2016",
    CARIMAGE: "car-08.jpg",
    CAROWNER: "Delivery",
    IMAGE: "customer-08.jpg",
    CUSTOMER: "Jay Beckman",
    CUSTOMERNAME: "Company",
    AMOUNT: "$230",
    DATE: "26 Sep 2024",
    STATUS: "Rejected",
  },
  {
    INVOICENO: "#INV12353",
    CAR: "Camaro",
    CARIMAGE: "car-09.jpg",
    CAROWNER: "Station Wagon",
    IMAGE: "customer-09.jpg",
    CUSTOMER: "Francis Harris",
    CUSTOMERNAME: "Client",
    AMOUNT: "$230",
    DATE: "01 Sep 2024",
    STATUS: "Rejected",
  },
  {
    INVOICENO: "#INV12354",
    CAR: "Toyota Camry",
    CARIMAGE: "car-10.jpg",
    CAROWNER: "Mini Van",
    IMAGE: "customer-10.jpg",
    CUSTOMER: "Renaldo Labarre",
    CUSTOMERNAME: "Company",
    AMOUNT: "$300",
    DATE: "15 Aug 2024",
    STATUS: "In Rental",
  },
];
export default {
  data() {
    return {
      data,
      columns,
    };
  },
  methods: {
    getImageURL(imageName) {
      return new URL(`/src/assets/admin/img/car/${imageName}`, import.meta.url).href;
    },
    getImageURLOne(imageName) {
      return new URL(`/src/assets/admin/img/customer/${imageName}`, import.meta.url).href;
    },
  },
};
</script>
