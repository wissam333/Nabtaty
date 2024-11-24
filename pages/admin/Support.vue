<template>
  <div class="contain" :class="useSidebar().value ? 'shrink' : ''">
    <div class="title-container">
      <div class="head-title">
        <h4 class="header4">
          {{ $i18n.locale === "ar" ? "المساعدة و الدعم" : "Help & Support" }}
        </h4>
      </div>
      <div class="options">
        <div class="reload btn btn-success mx-2" @click="visible = true">
          <font-awesome :icon="['fas', 'plus']" />
          {{ $i18n.locale === "ar" ? "إضافة" : "Add" }}
        </div>

        <div class="reload btn btn-success" @click="getInfo()">
          <font-awesome :icon="['fas', 'rotate-right']" />
          {{ $i18n.locale === "ar" ? "إعادة تحميل" : "Reload" }}
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <div class="loading" v-if="loading">
        <img src="/loading/loadingnew2.svg" alt="" />
      </div>
      <div v-else class="cat-tabel">
        <table>
          <thead>
            <tr>
              <th>{{ $i18n.locale === "ar" ? "العنوان" : "Title" }}</th>
              <th>{{ $i18n.locale === "ar" ? "الوصف" : "Description" }}</th>

              <th>{{ $i18n.locale === "ar" ? "تعديل" : "Edit" }}</th>
            </tr>
          </thead>
          <tbody>
            <tr class="rows" v-for="cat in About" :key="cat.id">
              <td class="truncate">
                <div>
                  <span>{{ cat.title }}</span>
                </div>
              </td>

              <td class="truncate">
                <div>
                  <span>{{ cat.description }}</span>
                </div>
              </td>

              <td>
                <span
                  class="delete"
                  @click="
                    deleteModal = true;
                    deleteRegion = cat;
                  "
                >
                  <font-awesome :icon="['fas', 'trash']" />
                </span>
                <span class="edit-link">
                  <span
                    class="edit"
                    @click="
                      visible2 = true;
                      editedCat = cat;
                      editfunc(cat);
                    "
                  >
                    <font-awesome :icon="['fas', 'pen-to-square']" />
                  </span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <Dialog v-model:visible="visible" modal :style="{ width: '50rem' }">
    <template #container="{ closeCallback }">
      <div class="dialog" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
        <h5 class="fw-bold mb-5">
          {{ $i18n.locale === "ar" ? "إضافة قسم جديد" : "Add New Part" }}
        </h5>
        <div class="content">
          <div>
            <div class="d-flex flex-column-reverse mb-3">
              <input
                v-model="title_AR"
                id="title_AR"
                type="text"
                autocomplete="off"
                :placeholder="
                  $i18n.locale === 'ar'
                    ? 'العنوان باللغة العربية'
                    : 'Title In Arabic'
                "
                title="Enter only letters and spaces"
                required
              />
              <label for="title_AR"
                >{{
                  $i18n.locale === "ar"
                    ? "العنوان باللغة العربية"
                    : "Title In Arabic"
                }}
                *</label
              >
            </div>

            <div class="d-flex flex-column-reverse mb-3">
              <input
                v-model="title_EN"
                id="title_EN"
                type="text"
                autocomplete="off"
                :placeholder="
                  $i18n.locale === 'ar'
                    ? 'العنوان باللغة الانجليزية'
                    : 'Title In English'
                "
                title="Enter only letters and spaces"
                required
              />
              <label for="title_EN"
                >{{
                  $i18n.locale === "ar"
                    ? "العنوان باللغة الانجليزية"
                    : "Title In English"
                }}
                *</label
              >
            </div>

            <div class="d-flex flex-column-reverse mb-3">
              <textarea
                v-model="description_AR"
                id="description_AR"
                type="text"
                autocomplete="off"
                :placeholder="
                  $i18n.locale === 'ar'
                    ? 'الوصف بالعربي'
                    : 'Description In Arabic'
                "
                required
              />
              <label for="description_AR"
                >{{
                  $i18n.locale === "ar"
                    ? "الوصف بالعربي"
                    : "Description In Arabic"
                }}
                *</label
              >
            </div>

            <div class="d-flex flex-column-reverse mb-3">
              <textarea
                v-model="description_EN"
                id="description_En"
                type="text"
                autocomplete="off"
                :placeholder="
                  $i18n.locale === 'ar'
                    ? 'الوصف بالانجليزي'
                    : 'Description In English'
                "
                required
              />
              <label for="description_En"
                >{{
                  $i18n.locale === "ar"
                    ? "الوصف بالانجليزي"
                    : "Description In English"
                }}
                *</label
              >
            </div>
          </div>
        </div>
        <div class="mt-5 d-flex w-100 justify-content-end">
          <button class="btn btn-secondary" @click="closeCallback">
            {{ $t("Close") }}
          </button>
          <button class="btn btn-success mx-2" @click="addInfo()" autofocus>
            {{ $t("Add") }}
          </button>
        </div>
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="visible2" modal :style="{ width: '50rem' }">
    <template #container="{ closeCallback }">
      <div class="dialog" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
        <span>
          {{ $i18n.locale === "ar" ? "تعديل المعلومات " : "Edit Information" }}
        </span>
        <div class="content">
          <div>
            <div class="d-flex flex-column-reverse mb-3">
              <input
                v-model="editTitle_Ar"
                id="editTitle_Ar"
                type="text"
                autocomplete="off"
                :placeholder="
                  $i18n.locale === 'ar'
                    ? 'العنوان باللغة العربية'
                    : 'Title In Arabic'
                "
                title="Enter only letters and spaces"
                required
              />
              <label for="editTitle_Ar"
                >{{
                  $i18n.locale === "ar"
                    ? "العنوان باللغة العربية"
                    : "Title In Arabic"
                }}
                *</label
              >
            </div>

            <div class="d-flex flex-column-reverse mb-3">
              <input
                v-model="editTitle_EN"
                id="editTitle_EN"
                type="text"
                autocomplete="off"
                :placeholder="
                  $i18n.locale === 'ar'
                    ? 'العنوان باللغة الانجليزية'
                    : 'Title In English'
                "
                title="Enter only letters and spaces"
                required
              />
              <label for="editTitle_EN"
                >{{
                  $i18n.locale === "ar"
                    ? "العنوان باللغة الانجليزية"
                    : "Title In English"
                }}
                *</label
              >
            </div>

            <div class="d-flex flex-column-reverse mb-3">
              <textarea
                v-model="editDescription_AR"
                id="editDescription_AR"
                type="text"
                autocomplete="off"
                rows="5"
                :placeholder="
                  $i18n.locale === 'ar'
                    ? 'الوصف بالعربي'
                    : 'Description In Arabic'
                "
                required
              />
              <label for="editDescription_AR"
                >{{
                  $i18n.locale === "ar"
                    ? "الوصف بالعربي"
                    : "Description In Arabic"
                }}
                *</label
              >
            </div>

            <div class="d-flex flex-column-reverse mb-3">
              <textarea
                v-model="editDescription_EN"
                id="editDescription_EN"
                type="text"
                autocomplete="off"
                :placeholder="
                  $i18n.locale === 'ar'
                    ? 'الوصف بالانجليزي'
                    : 'Description In English'
                "
                rows="5"
                required
              />
              <label for="editDescription_EN"
                >{{
                  $i18n.locale === "ar"
                    ? "الوصف بالانجليزي"
                    : "Description In English"
                }}
                *</label
              >
            </div>
          </div>
        </div>
        <div class="mt-5 d-flex w-100 justify-content-end">
          <button class="btn btn-secondary" @click="closeCallback">
            {{ $t("Close") }}
          </button>
          <button class="btn btn-success mx-2" @click="editCat()" autofocus>
            {{ $t("Edit") }}
          </button>
        </div>
      </div>
    </template>
  </Dialog>

  <!-- delete modal -->
  <ElementsAppModal :isOpen="deleteModal" @updateIsOpen="updateDeleteModal">
    <template #header>
      <h4>{{ $i18n.locale === "ar" ? "تأكيد الحذف" : "Confirm Delete" }}</h4>
    </template>
    <template #content>
      <p>
        {{
          $i18n.locale === "ar"
            ? "هل أنت متأكد من أنك تريد حذف"
            : "Are You Sure You Want To Delete"
        }}
        {{ $i18n.locale === "ar" ? "؟" : "?" }}
      </p>
    </template>
    <template #footer>
      <button class="btn btn-secondary" @click="deleteModal = false">
        {{ $t("Close") }}
      </button>
      <button class="btn btn-danger" @click="DeleteCat()">
        {{ $t("Delete") }}
      </button>
    </template>
  </ElementsAppModal>
</template>
<script setup>
definePageMeta({
  layout: "admin", // This will disable the default layout
});
const {
  public: { api, apiBase },
} = useRuntimeConfig();
const { locale } = useI18n();
const { $awn } = useNuxtApp();

const visible = ref(false);
const visible2 = ref(false);

// edit
let editDescription_AR = ref();
let editDescription_EN = ref();
let editTitle_EN = ref();
let editTitle_Ar = ref();

//add
let title_AR = ref();
let title_EN = ref();
let description_AR = ref();
let description_EN = ref();

// delete modal
let deleteRegion = ref();
let deleteModal = ref(false);
const updateDeleteModal = (value) => {
  deleteModal.value = value;
};

let loading = ref(false);
let About = ref();
const getInfo = async () => {
  loading.value = true;
  if (locale.value === "ar") {
    const { data: productsData, pending } = await useFetch(
      `${api.GetSupport}`,
      {
        baseURL: apiBase,
        credentials: "include",
        headers: {
          "accept-language": "ar",
        },
      }
    );
    watchEffect(() => {
      if (process.client) {
        if (productsData.value) {
          About.value = productsData.value;
        }
      }
    });
  } else {
    const { data: productsData, pending } = await useFetch(
      `${api.GetSupport}`,
      {
        baseURL: apiBase,
        credentials: "include",
        headers: {
          "accept-language": "en",
        },
      }
    );
    watchEffect(() => {
      if (process.client) {
        if (productsData.value) {
          About.value = productsData.value;
        }
      }
    });
  }
  loading.value = false;
};
//init
getInfo();

const DeleteCat = async () => {
  const { RemovePlant, error } = await useFetch(
    `${api.DeleteSupport}/${deleteRegion.value.id}`,
    {
      credentials: "include",
      baseURL: apiBase,
      method: "DELETE",
    }
  );

  // re get the product
  getInfo();

  deleteModal.value = false;
  //message
  locale.value === "en"
    ? $awn.success("Deleted Successfully", {
        durations: { global: 5000 },
      })
    : $awn.success("تم حذف بنجاح", {
        durations: { global: 5000 },
      });
};

const addInfo = async () => {
  const { data } = await useFetch(api.AddSupport, {
    baseURL: apiBase,
    credentials: "include",
    method: "POST",
    body: {
      title_AR: title_AR.value,
      title_EN: title_EN.value,
      description_AR: description_AR.value,
      description_EN: description_EN.value,
    },
  });

  visible.value = false;
  description_AR.value = "";
  description_EN.value = "";
  title_AR.value = "";
  title_EN.value = "";
  getInfo();
  //message
  locale.value === "en"
    ? $awn.success("Added Successfully", {
        durations: { global: 5000 },
      })
    : $awn.success("تم الإضافة بنجاح", {
        durations: { global: 5000 },
      });
};

const editfunc = async (info) => {
  const { data: ar } = await useFetch(
    `${api.GetSupportById}/${editedCat.value.id}`,
    {
      credentials: "include",
      baseURL: apiBase,
      headers: {
        "accept-language": "ar",
      },
    }
  );

  const { data: en } = await useFetch(
    `${api.GetSupportById}/${editedCat.value.id}`,
    {
      credentials: "include",
      baseURL: apiBase,
      headers: {
        "accept-language": "en",
      },
    }
  );

  editTitle_Ar.value = ar.value.title;
  editTitle_EN.value = en.value.title;

  editDescription_AR.value = ar.value.description;
  editDescription_EN.value = en.value.description;
};

let editedCat = ref();
const editCat = async () => {
  const { edit, error } = await useFetch(
    `${api.UpdateSupport}/${editedCat.value.id}`,
    {
      credentials: "include",
      body: {
        title_AR: editTitle_Ar.value,
        title_EN: editTitle_EN.value,
        description_AR: editDescription_AR.value,
        description_EN: editDescription_EN.value,
      },
      baseURL: apiBase,
      method: "PUT",
    }
  );

  // re get the product
  getInfo();

  visible2.value = false;
  editDescription_AR.value = "";
  editDescription_EN.value = "";
  editTitle_EN.value = "";
  editTitle_Ar.value = "";
  //message
  locale.value === "en"
    ? $awn.success("Edited Successfully", {
        durations: { global: 5000 },
      })
    : $awn.success("تم التعديل بنجاح", {
        durations: { global: 5000 },
      });
};
</script>
<style lang="scss" scoped>
.contain {
  position: relative;
  overflow-x: hidden;
  min-height: calc(100vh - 77.6px);
  transition: all 0.3s linear;
  width: 100%;
  background-color: #f8f7fa;
  float: right;
  margin-top: 77.6px;
  padding: 16px;
  @media (max-width: 600px) {
    margin-top: 55px;
    min-height: calc(100vh - 55px);
  }

  &.shrink {
    width: calc(100% - 260px); /* 100% + 260px(sidebar)*/
    @media (max-width: 600px) {
      width: 100%;
    }
  }

  .title-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 16px 0px;
    @media (max-width: 991px) {
      flex-direction: column;
      align-items: flex-start;
    }
    .head-title {
      p {
        font-size: 15px;
        color: #6d6a77;
        a {
          color: #19ad7b;
          text-decoration: underline;
        }
      }
    }
    .options {
      .reload {
        background-color: #19ad7b;
        color: #fff;
        border: none;
      }
      @media (max-width: 991px) {
        margin-top: 10px;
      }
    }
  }
  .table-responsive {
    background-color: #fff;
    border-radius: 8px;
  }
  .cat-tabel {
    height: calc(100vh - 274px);
    overflow-y: scroll;
    @media (max-width: 991px) {
      height: calc(100vh - 320px);
    }
  }
  .loading {
    img {
      width: 50px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  thead,
  tbody,
  tfoot,
  tr,
  td,
  th {
    padding: 8px 15px;
    white-space: nowrap;
  }
  table {
    width: 100%;
  }
  thead {
    background-color: #19ad7b;
    color: #fff;
  }
  td {
    color: #333;
    max-width: 300px;
    font-size: 14px !important;
    cursor: pointer;
  }
  .pagination {
    select {
      border: 1px solid #dbdbdb;
      border-radius: 8px;
      color: #333;
      padding: 10px;
      &:focus,
      :focus-visible {
        outline: none;
      }
    }
    .page-item {
      .page-link {
        cursor: pointer;
        border: none !important;
        span {
          color: #6b7280;
          padding: 0.5rem 1rem;
          @media (max-width: 768px) {
            padding: 0;
          }
        }
        &.page-num {
          color: #19ad7b;
        }
      }
    }
    .show-info {
      @media (max-width: 520px) {
        display: none !important;
      }
    }
  }

  .rows {
    color: #000;
    &:nth-child(even) {
      background-color: #eee;
    }
    &:nth-child(odd) {
      background-color: #fff;
    }
    .cat-img {
      img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
    }
    .cat-info {
      span,
      p {
        max-width: 200px;
        /* will make [...] at the end */
        text-overflow: ellipsis;
        /* paragraph to one line */
        white-space: nowrap;
        /* older browsers */
        overflow: hidden;
      }
      p {
        font-size: 14px;
      }
    }
    .badge {
      font-size: 13px;
      padding: 8px 12px;
    }
    .circle {
      display: block;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      border: 1px solid #cbc9c9;
    }
    .delete,
    .edit {
      padding: 6px;
      color: #333;
      svg {
        font-size: 20px;
      }
    }
  }
}
.drop-area {
  position: relative;
  .p-fileupload {
    z-index: 2;
  }
  img {
    position: absolute;
    object-fit: cover;
    z-index: 1;
  }
}
.clear {
  z-index: 2;
  position: absolute;
  top: 0;
  inset-inline-end: 0;
  margin: 10px;
}
</style>
