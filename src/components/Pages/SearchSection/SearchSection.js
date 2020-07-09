import React, {
  useContext,
  useImperativeHandle,
  useRef,
  useState
} from "react";
import { Container, SearchInput } from "../../../components";
import { Strings } from "../../../constants";
import { filterData } from "../../../utils/filter";
import { CityContext } from "../../../App";
import "./SearchSection.scss";

const SearchSection = React.forwardRef(
  ({ cityInfo }, ref) => {
    const [searchText, setSearchText] = useState("");
    const cities = useContext(CityContext) || [];
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current.focus();
      }
    }));

    const _handleSearchText = event => {
      setSearchText(event.target.value);
    };

    const _handleSearchSubmit = event => {
      if (event.key === "Enter") {
        let city = filterData(cities, "name", searchText);
        if (city.length !== 0) {
          let cityCode = city[0].code || "";
          cityInfo(cityCode);
          setSearchText("");
        } else {
          alert(`Couldn't find any search results for ${searchText}!`);
        }
      }
    };

    return (
      <div className="content-wrapper">
        <Container color="grey" padding="padding-tiny">
          <div className="search-container-wrapper">
            <div className="title">
              {
                Strings.APPLICATION.HOME_SCREEN.CONTAINER_TEXT.CONTAINER_ONE
                  .TITLE
              }
            </div>
            <div className="search-contents">
              <div className="content">
                {
                  Strings.APPLICATION.HOME_SCREEN.CONTAINER_TEXT.CONTAINER_ONE
                    .TEXT_CONTENT_ONE
                }
              </div>
              <div className="content">
                {
                  Strings.APPLICATION.HOME_SCREEN.CONTAINER_TEXT.CONTAINER_ONE
                    .TEXT_CONTENT_TWO
                }
              </div>
              <SearchInput
                value={searchText}
                ref={inputRef}
                onChange={event => _handleSearchText(event)}
                onEnter={event => _handleSearchSubmit(event)}
              />
            </div>
          </div>
        </Container>
      </div>
    );
  }
);

export default React.memo(SearchSection);
