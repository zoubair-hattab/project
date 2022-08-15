import * as Yup from "yup";

const validationSchemaArray = [
  Yup.object({
    compaign_type: Yup.string().required("Your must choose the compaign type."),
    country_first_field: Yup.string().when("compaign_type", {
      is: (compaign_type) => {
        return compaign_type == "I want to create a company campaign";
      },
      then: Yup.string().required("Your must select a country."),
    }),
    country_second_field: Yup.string().when("compaign_type", {
      is: (compaign_type) => {
        return compaign_type == "I want to create a Not for profit campaign";
      },
      then: Yup.string().required("Your must select a country. "),
    }),
  }),

  Yup.object({
    email: Yup.string()
      .email("Please enter a valid email.")
      .required("Please enter your email."),
  }),

  Yup.object({
    validation_email_number: Yup.number("oops. Please enter a number").required(
      "Please enter the confirmation email number."
    ),
  }),

  Yup.object({
    full_phone_number: Yup.object({
      country_code: Yup.string().required("Please choose your country code."),
      phone_number: Yup.number("Please enter a valid phone number.").required(
        "Please enter your phone number."
      ),
    }),
  }),

  Yup.object({
    validation_phone_number: Yup.number("oops. Please enter a number").required(
      "Please enter the confirmation phone number."
    ),
  }),

  Yup.object({
    password: Yup.string()
      .matches(
        /[a-z]/,
        "Your password must have at least one lawercase character."
      )
      .matches(
        /[A-Z]/,
        "Your password must have at least one uppercase character."
      )
      .matches(/[0-9]/, "Your password must have at least one number.")
      .matches(
        /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
        "Your password must have at least one special character."
      )
      .min(8, "Password is too short - should be 8 chars minimum.")
      .required("Please enter a password."),
  }),

  Yup.object({
    first_name: Yup.string().required("Please enter your first name"),
    last_name: Yup.string().required("Please enter your last name"),
    date_birthday: Yup.date()
      .transform(function (value, originalValue) {
        if (this.isType(value)) {
          return value;
        }
        const result = parse(originalValue, "dd.MM.yyyy", new Date());
        return result;
      })
      .typeError("Please enter a valid date")
      .required("Please enter your date of birthday.")
      .min("1969-11-13", "Date is too early."),
  }),

  Yup.object({
    country: Yup.string().required("Please choose your country."),
    zip_code: Yup.string().required("Please enter your zip code."),
    address_one: Yup.string().required("Please enter your address"),
    address_two: Yup.string(),
    city: Yup.string().required("Please enter your city"),
  }),

  Yup.object({
    country_business_address: Yup.string().required(
      "Please choose country business address."
    ),
    legal_business_name: Yup.string().required(
      "Please enter your legal business name"
    ),
  }),

  Yup.object({
    business_country: Yup.string().required("Please choose a country."),
    business_zip_code: Yup.string().required("Please enter a zip code."),
    business_address_one: Yup.string().required("Please enter an address"),
    business_address_two: Yup.string(),
    business_city: Yup.string().required("Please enter a city"),
  }),

  Yup.object({
    company_role: Yup.string().required(
      "Your must choose your role in the company."
    ),
  }),

  Yup.object({
    compaign_logo: Yup.mixed().test("required", "Please choose a file ", (value) => {
      return value != 0 && value.length
    }).test("multiple", "Please choose a single image ", (value) => {
      return value && value.length == 1
    }).test("type", "Please choose only photo", (value) => {
      return value && value[0] && (value[0].type == "image/jpeg" || value[0].type == "image/png" || value[0].type == "image/jpg")
    }).test("size", "The size of the image msut be between 2MB  and 10MB", (value) => {
      return value && value[0] && value[0].size >= 2000000 && value[0].size <= 10000000
    }),
    compaign_photo: Yup.mixed().test("required", "Please choose a file ", (value) => {
      return value != 0 && value.length
    }).test("multiple", "Please choose a single image ", (value) => {
      return value && value.length == 1
    }).test("type", "Please choose only photo", (value) => {
      return value && value[0] && (value[0].type == "image/jpeg" || value[0].type == "image/png" || value[0].type == "image/jpg")
    }).test("size", "The size of the image msut be between 2MB  and 10MB", (value) => {
      return value && value[0] && value[0].size >= 2000000 && value[0].size <= 10000000
    })
  }),

  Yup.object({
    company_url: Yup.string().url("Please enter correct url!").required("Please enter the company's website"),
    twitter: Yup.string().url("Please enter correct url!")
      .test("twitter url", "Please enter a valid url", (value) => {
        return value && value.includes("twitter.com")
      })
      .required("Please enter the twitter account"),
    linkedin: Yup.string().url("Please enter correct url!"),
    instagram: Yup.string().url("Please enter correct url!"),
    facebook: Yup.string().url("Please enter correct url!")
  }),

  Yup.object({
    company_title: Yup.string().required(
      "Please enter the company title"
    ),
    short_description: Yup.string().required(
      "Please enter a short description"
    ),
    long_description: Yup.string().required("Please enter a long description."),
  }),

  Yup.object({
    crypto_fund: Yup.string().required("Your must choose the compaign type."),
    money_fund: Yup.number().required("Please enter a money amount."),
  }),

  Yup.object({
    raise_period: Yup.number()
      .min(1, "Your must between 1 and 30 days")
      .max(30, "Your must between 1 and 30 days")
      .required("Please enter a raise period you want."),
  }),

  Yup.object({
    yield_period: Yup.number()
      .min(1, "Your must between 1 and 90 days")
      .max(90, "Your must between 1 and 90 days")
      .required("Please enter a raise period you want."),
  }),
  Yup.object({
    identity_country: Yup.string().required("Please choose a country."),
    identity_type: Yup.string().required(
      "Please choose the type of identity methed."
    ),
    id_image: Yup.mixed().test("required", "Please choose a file ", (value) => {
      return value != 0 && value.length
    }).test("multiple", "Please choose a single image ", (value) => {
      return value && value.length == 1
    }).test("type", "Please choose only photo", (value) => {
      return value && value[0] && (value[0].type == "image/jpeg" || value[0].type == "image/png" || value[0].type == "image/jpg")
    }).test("size", "The size of the image msut be between 2MB  and 10MB", (value) => {
      return value && value[0] && value[0].size >= 2000000 && value[0].size <= 10000000
    }),
    selfie_image: Yup.mixed().test("required", "Please choose a file ", (value) => {
      return value != 0 && value.length
    }).test("multiple", "Please choose a single image ", (value) => {
      return value && value.length == 1
    }).test("type", "Please choose only photo", (value) => {
      return value && value[0] && (value[0].type == "image/jpeg" || value[0].type == "image/png" || value[0].type == "image/jpg")
    }).test("size", "The size of the image msut be between 2MB  and 10MB", (value) => {
      return value && value[0] && value[0].size >= 2000000 && value[0].size <= 10000000
    })
  }),
];

export default validationSchemaArray;
