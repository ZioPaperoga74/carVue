<template>
  <div class="custom-datatable-filter table-responsive brandstable country-table">
    <a-table class="table datatable" :columns="columns" :data-source="data">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'INVOICENO'">
          <router-link to="/admin-template/finance/invoice-details">{{
            record.INVOICENO
          }}</router-link>
        </template>
        <template v-else-if="column.key === 'NAME'">
          <div class="d-flex align-items-center">
            <router-link
              to="customer-details"
              class="avatar avatar-rounded me-2 flex-shrink-0"
              ><img :src="getImageURL(record.IMAGE)" alt=""
            /></router-link>
            <div>
              <h6 class="fs-14 fw-semibold">
                <router-link to="customer-details">{{ record.NAME }} </router-link>
              </h6>
            </div>
          </div>
        </template>
        <template v-else-if="column.key === 'AMOUNT'">
          <p class="text-gray-9">{{ record.AMOUNT }}</p>
        </template>
        <template v-else-if="column.key === 'PAYMENTMETHOD'">
          <p class="text-gray-9">{{ record.PAYMENTMETHOD }}</p>
        </template>
        <template v-else-if="column.key === 'DATE'">
          <p class="text-gray-9">{{ record.DATE }}</p>
        </template>
        <template v-else-if="column.key === 'STATUS'">
          <span
            class="d-inline-flex align-items-center badge-sm"
            :class="[
              'badge',
              {
                'badge badge-soft-success': record.STATUS === 'Completed',
                'badge badge-soft-info': record.STATUS === 'Pending',
                'badge badge-soft-purple': record.STATUS === 'Refunded',
                'badge badge-soft-danger': record.STATUS === 'Failed',
              },
            ]"
          >
            <i
              class="ti ti-point-filled"
              :class="[
                'me-1',
                {
                  'text-success': record.STATUS === 'Completed',
                  'text-info': record.STATUS === 'Pending',
                  'text-purple': record.STATUS === 'Refunded',
                  'text-danger': record.STATUS === 'Failed',
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
    title: "NAME",
    dataIndex: "NAME",
    key: "NAME",
    sorter: {
      compare: (a, b) => {
        a = a.NAME.toLowerCase();
        b = b.NAME.toLowerCase();
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
    title: "PAYMENT METHOD",
    dataIndex: "PAYMENTMETHOD",
    key: "PAYMENTMETHOD",
    sorter: {
      compare: (a, b) => {
        a = a.PAYMENTMETHOD.toLowerCase();
        b = b.PAYMENTMETHOD.toLowerCase();
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
    IMAGE: "avatar-20.jpg",
    NAME: "Andrew Simons",
    AMOUNT: "$120.00",
    PAYMENTMETHOD: "Credit Card",
    DATE: "24 Jan 2025",
    STATUS: "Completed",
  },
  {
    INVOICENO: "#INV12346",
    IMAGE: "avatar-21.jpg",
    NAME: "David Steiger",
    AMOUNT: "$85.00",
    PAYMENTMETHOD: "Debit Card",
    DATE: "19 Dec 2024",
    STATUS: "Pending",
  },
  {
    INVOICENO: "#INV12347",
    IMAGE: "avatar-12.jpg",
    NAME: "Virginia Phu",
    AMOUNT: "$250.00",
    PAYMENTMETHOD: "PayPal",
    DATE: "11 Dec 2024",
    STATUS: "Completed",
  },
  {
    INVOICENO: "#INV12348",
    IMAGE: "avatar-22.jpg",
    NAME: "Walter Hartmann",
    AMOUNT: "$175.00",
    PAYMENTMETHOD: "Bank Transfer",
    DATE: "29 Nov 2024",
    STATUS: "Refunded",
  },
  {
    INVOICENO: "#INV12349",
    IMAGE: "avatar-07.jpg",
    NAME: "Andrea Jermaine",
    AMOUNT: "$200.00",
    PAYMENTMETHOD: "Digital Payment",
    DATE: "03 Nov 2024",
    STATUS: "Completed",
  },
  {
    INVOICENO: "#INV12350",
    IMAGE: "avatar-05.jpg",
    NAME: "Dennis Eckhardt",
    AMOUNT: "$90.00",
    PAYMENTMETHOD: "Credit Card",
    DATE: "31 Oct 2024",
    STATUS: "Pending",
  },
  {
    INVOICENO: "#INV12351",
    IMAGE: "avatar-25.jpg",
    NAME: "Lan Adams",
    AMOUNT: "$160.00",
    PAYMENTMETHOD: "Debit Card",
    DATE: "15 Oct 2024",
    STATUS: "Completed",
  },
  {
    INVOICENO: "#INV12352",
    IMAGE: "avatar-08.jpg",
    NAME: "Ann Crump",
    AMOUNT: "$180.00",
    PAYMENTMETHOD: "PayPal",
    DATE: "26 Sep 2024",
    STATUS: "Failed",
  },
  {
    INVOICENO: "#INV12353",
    IMAGE: "avatar-07.jpg",
    NAME: "Julie Black",
    AMOUNT: "$230.00",
    PAYMENTMETHOD: "Bank Transfer",
    DATE: "01 Sep 2024",
    STATUS: "Completed",
  },
  {
    INVOICENO: "#INV12354",
    IMAGE: "avatar-16.jpg",
    NAME: "Jean Walker",
    AMOUNT: "$300.00",
    PAYMENTMETHOD: "Digital Payment",
    DATE: "15 Aug 2024",
    STATUS: "Completed",
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
      return new URL(`/src/assets/admin/img/profiles/${imageName}`, import.meta.url).href;
    },
  },
};
</script>
