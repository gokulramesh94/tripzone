import React, { useContext, useState } from "react";
import {
  Button,
  ButtonGroup,
  Container,
  DiscountDisplayer
} from "../../../components";
import { Images, Strings } from "../../../constants";
import { UserContext } from "../../../App";
import "./BookingSection.scss";

function BookingSection({ data }) {
  const userInfo = useContext(UserContext);
  const [discount, setDiscount] = useState(0);
  const [tax, setTax] = useState(5);
  return (
    <div className="content-wrapper">
      <Container color="blue" padding="padding-tiny">
        <div className="booking-container">
          <div className="title">
            {
              Strings.APPLICATION.HOME_SCREEN.CONTAINER_TEXT.CONTAINER_THREE
                .TITLE
            }
          </div>
          <div className="price">
            {data.price && `$ ${data.price}`}
          </div>
          <div className="rates">
            <DiscountDisplayer
              title="Membership Discount"
              price={discount + 10}
            />
            <DiscountDisplayer
              title="Tax Amount"
              price={data.price ? data.price * tax / 100 : tax}
            />
          </div>
          <div className="description">
            {
              Strings.APPLICATION.HOME_SCREEN.CONTAINER_TEXT.CONTAINER_THREE
                .TEXT_CONTENT_ONE
            }
          </div>
          <ButtonGroup
            data={
              Strings.APPLICATION.HOME_SCREEN.CONTAINER_TEXT.CONTAINER_THREE
                .BUTTON_GROUP.MEMBERSHIP_DISCOUNT
            }
            selectedItem={discount}
            handleclick={value => setDiscount(value)}
          />
          <div className="description">
            {
              Strings.APPLICATION.HOME_SCREEN.CONTAINER_TEXT.CONTAINER_THREE
                .TEXT_CONTENT_TWO
            }
          </div>
          <ButtonGroup
            data={
              Strings.APPLICATION.HOME_SCREEN.CONTAINER_TEXT.CONTAINER_THREE
                .BUTTON_GROUP.TAX_AMOUNT
            }
            selectedItem={tax}
            handleclick={value => setTax(value)}
          />
          <div className="description">
            {
              Strings.APPLICATION.HOME_SCREEN.CONTAINER_TEXT.CONTAINER_THREE
                .TEXT_CONTENT_THREE
            }
          </div>
          <Button
            text="Proceed to Pay"
            size="large"
            onClick={() => alert("Payment Successful!")}
          />
          {userInfo && userInfo.prime === "true"
            ? <div className="prime-logo-wrapper">
                <img src={Images.PRIME} alt="Prime logo" />
              </div>
            : null}
        </div>
      </Container>
    </div>
  );
}

export default BookingSection;
