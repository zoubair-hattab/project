import SelectCompaignTypeForm from "@/components/register/selectCompaignTypeForm";
import EmailAddressForm from "@/components/register/emailAddressForm";
import EmailConfrimationForm from "@/components/register/emailConfrimationForm";
import PhoneNumberForm from "@/components/register/phoneNumberForm";
import PhoneNumberConfrimationForm from "@/components/register/phoneNumberConfirmation";
import PasswordForm from "@/components/register/passwordForm";
import PersonalDetialsForm from "@/components/register/personalDetailsForm";
import HomeAddressForm from "@/components/register/homeAddressForm";
import BusinessRecordsForm from "@/components/register/businessRecordsForm";
import RoleCompanyForm from "@/components/register/roleCompanyForm";
import SocialLinksForm from "@/components/register/socialLinksForm";
import CompanyDescriptionForm from "@/components/register/companyDescriptionForm";
import BusienssAddressForm from "@/components/register/businessAddressFrom";
import MoneyWarpForm from "@/components/register/moneyWarpForm";
import RaisePeriodForm from "@/components/register/raisePeriodForm";
import YieldPeriodForm from "@/components/register/yieldPeriodForm";
import VerifyIdentityForm from "@/components/register/verifyIdentityForm";
import EndOfSubmition from "@/components/register/endOfSubmition";
import CompaignLogoAndImage from "../compaignLogoAndImage";

const stepContentArray = [
  <SelectCompaignTypeForm key={"selectCompaignTypeForm"} />,
  <EmailAddressForm key={"emailAddressForm"} />,
  <EmailConfrimationForm key={"emailConfrimationForm"} />,
  <PhoneNumberForm key={"phoneNumberForm"} />,
  <PhoneNumberConfrimationForm key={"phoneNumberConfrimation"} />,
  <PasswordForm key={"passwordForm"} />,
  <PersonalDetialsForm key={"personalDetialsForm"} />,
  <HomeAddressForm key={"homeAddressForm"} />,
  <BusinessRecordsForm key={"businessRecordsForm"} />,
  <BusienssAddressForm key={"busienssAddressForm"} />,
  <RoleCompanyForm key={"roleCompanyForm"} />,
  <CompaignLogoAndImage key={"compaignLogoAndImage"} />,
  <SocialLinksForm key={"socialLinksForm"} />,
  <CompanyDescriptionForm key={"companyDescriptionForm"} />,
  <MoneyWarpForm key={"moneyWarpForm"} />,
  <RaisePeriodForm key={"raisePeriodForm"} />,
  <YieldPeriodForm key={"yieldPeriodForm"} />,
  <VerifyIdentityForm key={"verifyIdentityForm"} />,
  <EndOfSubmition key={"endOfSubmationForm"} />
];

export default stepContentArray;
