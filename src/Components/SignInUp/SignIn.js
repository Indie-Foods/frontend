import React from "react";

import Styles from "./SignInUp.module.css";

import StyledMUIInput from "./Helpers/StyledMUIInput";

import { useLocation, useHistory } from "react-router-dom";

import { MobileNumberTextMask } from "./Helpers/StyledMUIInput";

import Button from "../Button";
import BottomText from "./Helpers/BottomText";

import { signInData } from "../StaticData";
import { firebaseAuthConfirmOTP, firebaseAuthSendOTP } from "../../Services/signInUp.service";
import { useDispatch, useSelector } from "react-redux";

function SignIn() {
  const location = useLocation();

  const [values, setValues] = React.useState({
    textmask: "",
    numberformat: "",
  });

  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSignIn = async (otp, confirmationResult) => {
    const userData = await firebaseAuthConfirmOTP(otp, confirmationResult);
    if (userData.accessToken) {
      dispatch({
        type: "UPDATE_ACCESS_TOKEN",
        details: userData.accessToken,
      });
      history.push("/home");
    }
  };

  async function SignIn(e) {
    e.preventDefault();
    const mobile = e.target.elements.Mobile.value;

    if (mobile.length === 10) {
      const confirmationResultRes = await firebaseAuthSendOTP(mobile, true);

      dispatch({
        type: "UPDATE_AUTH_DATA",
        details: {
          confirmationResult: confirmationResultRes,
        }
      });

      if (confirmationResultRes) {
        dispatch({
          type: "UPDATE_POPUPSTATUS",
          details: {
            isOpen: true,
            verifyFun: handleSignIn,
            mobile
          },
        });
      }
    }
  }

  return (
    <div
      className={Styles.Wrapper}
      style={{
        transform:
          location.pathname === "/signin"
            ? "translatex(0)"
            : "translatex(100%)",
      }}
    >
      <div className={Styles.UpperSection}>
        <span className={Styles.Title}>{signInData.title}</span>
        <form className={Styles.Form} onSubmit={SignIn}>
          <StyledMUIInput
            fullWidth
            label="Mobile"
            value={values.Mobile}
            onChange={handleChange}
            name="Mobile"
            id="Mobile"
            InputProps={{
              inputComponent: MobileNumberTextMask,
            }}
            variant="standard"
            margin="dense"
            autoComplete="username"
          />

          {/* <StyledMUIInput
          fullWidth
          id="Password"
          label="Password"
          variant="standard"
          type="password"
          margin="dense"
          autoComplete="current-password"
        /> */}

          <Button
            content="Continue"
            mainColor="var(--orange-primary)"
            fontSize="var(--font-20)"
            wrapperClass={Styles.SignInUpButton}
          />
        </form>
      </div>
      <div className={Styles.BottomSecWrapper}>
        <BottomText data={signInData} />
      </div>
    </div>
  );
}

export default SignIn;
