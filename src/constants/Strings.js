const Strings = {
  APPLICATION: {
    END_POINTS: {
      LOGIN: "/login",
      CITIES: "/cities",
      CITY_INFO: "/city",
      TOURIST_SPOTS: "/tourism",
      FLIGHTS: "/flights",
      WORLD_CLOCK: "http://worldclockapi.com/api/json/est/now"
    },
    USER_DETAILS: {
      NIJIN: {
        username: "nijin",
        password: "password"
      },
      NIRANJAN: {
        username: "niranjan",
        password: "password"
      },
      ASHOK: {
        username: "ashok",
        password: "password"
      }
    },
    DATE_TIME_FORMAT: {
      TIME: "HH:mm",
      DATE: "DD MMM YY"
    },
    HOME_SCREEN: {
      CONTAINER_TEXT: {
        CONTAINER_ONE: {
          TITLE:
            "Travelling first leaves you speechless, then turns you in to a story teller",
          TEXT_CONTENT_ONE:
            "Take every choice you get in your life, because some things will happen only once. Once in a while go somewhere you have never been before.",
          TEXT_CONTENT_TWO:
            "With TripZone, you could book amazing holiday spots with low fares. We understand how travelling can impact your budget."
        },
        CONTAINER_TWO: {
          TITLE: "PLAN MY TRIP"
        },
        CONTAINER_THREE: {
          TITLE: "BOOK NOW",
          TEXT_CONTENT_ONE:
            "You can further increase your membership discount by renewing your membership. Choose number of years to Renew",
          TEXT_CONTENT_TWO:
            "You can donate to COVID-19 Care Fund by increasing the Tax Component. Choose % of Tax Component to be increased.",
          TEXT_CONTENT_THREE:
            "Your Ticket will be emailed to your registered email and phone number.",
          BUTTON_GROUP: {
            MEMBERSHIP_DISCOUNT: [
              {
                BUTTON_TEXT: "1 YEAR",
                VALUE: 5
              },
              {
                BUTTON_TEXT: "2 YEAR",
                VALUE: 10
              },
              {
                BUTTON_TEXT: "3 YEAR",
                VALUE: 15
              }
            ],
            TAX_AMOUNT: [
              {
                BUTTON_TEXT: "10%",
                VALUE: 10
              },
              {
                BUTTON_TEXT: "20%",
                VALUE: 20
              },
              {
                BUTTON_TEXT: "30%",
                VALUE: 30
              }
            ]
          }
        },
        CONTAINER_FOUR: {
          TITLE: "AVAILABLE FLIGHTS",
          NO_FLIGHTS: "No Flights Found!"
        },
        CONTAINER_SIX: {
          TITLE: "The World is Beautiful. Keep Travelling."
        }
      }
    }
  }
};

export default Strings;
