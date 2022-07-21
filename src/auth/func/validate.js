export const validate = (data) => {
  const errors = {};

  if (!data.name.trim()) {
    errors.name = "name required";
  } else {
    delete errors.name;
  }

  if (!data.mobuleNumber.trim()) {
    errors.mobuleNumber = "mobuleNumber required";
  } else if (!data.mobuleNumber.match(/^(\+\d{1,3}[- ]?)?\d{10}$/)) {
    errors.mobuleNumber = "mobule number is in valid";
    console.log("sss");
  } else {
    delete errors.mobuleNumber;
  }

  if (!data.email) {
    errors.email = "email required";
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)
  ) {
    errors.email = "Email address is in valid";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "password required";
  } else if (data.password.length < 8) {
    errors.password = "password need to be 8 characther or more";
  } else {
    delete errors.password;
  }

  return errors;
};
