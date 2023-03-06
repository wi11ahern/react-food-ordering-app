import { FormEvent, MouseEventHandler } from "react";
import Card from "../ui/card";
import ReactDOM from "react-dom";
import Input from "../ui/input";
import styles from "./order-form.module.css";
import useHttp from "../../hooks/useHttp";
import useInput from "../../hooks/useInput";

interface Props {
  orderTotal: number;
  onBackToCart: MouseEventHandler;
}

const OrderForm = (props: Props) => {
  const { sendRequest, encounteredError: encounteredRequestError } = useHttp();

  const {
    value: firstName,
    valueIsValid: firstNameIsValid,
    inputIsInvalid: firstNameInputIsInvalid,
    valueChangeHandler: firstNameChangeHandler,
    blurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput<string>("", (firstName: string) => {
    return firstName.trim() !== "";
  });

  const {
    value: lastName,
    valueIsValid: lastNameIsValid,
    inputIsInvalid: lastNameInputIsInvalid,
    valueChangeHandler: lastNameChangeHandler,
    blurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput<string>("", (lastName: string) => {
    return lastName.trim() !== "";
  });

  const {
    value: address,
    valueIsValid: addressIsValid,
    inputIsInvalid: addressInputIsInvalid,
    valueChangeHandler: addressChangeHandler,
    blurHandler: addressBlurHandler,
    reset: resetAddress,
  } = useInput<string>("", (address: string) => {
    return address.trim() !== "";
  });

  const formIsValid = firstNameIsValid && lastNameIsValid && addressIsValid;

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (!formIsValid) {
      console.log("Form inputs are not valid!");
      return;
    }
    sendRequest({
      url: "https://wills-react-sandbox-default-rtdb.firebaseio.com/orders.json",
      method: "POST",
      headers: { content: "application/json" },
      body: JSON.stringify({
        id: Math.random(),
        name: `${firstName} ${lastName}`,
        address,
        total: props.orderTotal,
      }),
    });

    if (!encounteredRequestError) {
      resetFirstName("");
      resetLastName("");
      resetAddress("");
    }
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Card className={styles.modal}>
          <form onSubmit={submitHandler}>
            <div className={styles["name-container"]}>
              <Input
                type="text"
                id="first-name"
                label="First Name"
                className={`${styles.name}`}
                value={firstName}
                onChange={firstNameChangeHandler}
                onBlur={firstNameBlurHandler}
              />
              {firstNameInputIsInvalid && <p>First name is invalid.</p>}
              <Input
                type="text"
                id="last-name"
                label="Last Name"
                className={`${styles.name}`}
                value={lastName}
                onChange={lastNameChangeHandler}
                onBlur={lastNameBlurHandler}
              />

              {lastNameInputIsInvalid && <p>Last name is invalid.</p>}
            </div>
            <Input
              type="text"
              id="address"
              label="Address"
              className={`${styles.address}`}
              value={address}
              onChange={addressChangeHandler}
              onBlur={addressBlurHandler}
            />
            {addressInputIsInvalid && <p>Address is invalid.</p>}
            <div className={styles.actions}>
              <button onClick={props.onBackToCart}>Cart</button>
              <button type="submit">Submit</button>
            </div>
          </form>
        </Card>,
        document.getElementById("order-portal")!
      )}
    </>
  );
};

export default OrderForm;
