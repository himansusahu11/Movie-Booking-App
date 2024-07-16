//for authrozition purpose
const userType = {
  customer: "CUSTOMER",
  admin: "ADMIN",
};

const roles = {
  onlyCustomer: [userType.customer],
  onlyAdmin: [userType.admin],
  bothAdminAndCustomer: [userType.customer, userType.admin],
};

export default {
  userType,
  roles,
};
