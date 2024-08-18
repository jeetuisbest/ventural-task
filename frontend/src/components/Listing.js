
import { apis, fieldsToDisplay as fields } from "../config";
import style from "../css/listing.module.css";
import Moment from "react-moment";
import { useFetchData } from "../hooks/useFetchData";


let api = apis.homepage;

export default function Listing(props) {

    const { data , error, isLoading } = useFetchData(api);
    let ipoList = data?.ipos || []
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;

  const handleRowClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className="App">
      <div>
        <h1>IPO List</h1>
        <table>
          <thead>
            <tr>
              {fields.map((el) => {
                return <th key={el.key}> {el.title} </th>;
              })}
            </tr>
          </thead>
          <tbody>
            {ipoList &&
              fields &&
              ipoList.map((ipoData, index) => (
                <tr
                  key={ipoData.id}
                  onClick={() => handleRowClick(`/ipo/${ipoData.id}`)}
                >
                  <td className={style.td}>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/OYO_Rooms_%28logo%29.png/1200px-OYO_Rooms_%28logo%29.png"
                      height={30}
                      width={30}
                      alt="logo image"
                    />

                    <div className={style.left}>
                      <h3>{fields[0].title}</h3>
                    </div>
                    <div className="right">
                      {ipoData[fields[0].key]} <br />
                      {fields[0].subKey &&
                        fields[0].subKey.key &&
                        fields[0].subKey.details.map((detailObj, index) => {
                          return (
                            <>
                              {!index == 0 && fields[0].subKey.deviderSymbol ? (
                                <span>{fields[0].subKey.deviderSymbol}</span>
                              ) : (
                                ""
                              )}
                              <small>
                                <Moment format={detailObj.dateFormat}>
                                  {
                                    ipoData[fields[0].subKey.key][
                                      detailObj.detailKey
                                    ]
                                  }
                                </Moment>
                              </small>
                            </>
                          );
                        })}
                    </div>
                  </td>
                  <td>
                    <div>
                      <h3>{fields[1].title}</h3>
                    </div>
                    <div> {ipoData[fields[1].key]}</div>
                  </td>
                  <td>
                    <div>
                      <h3>{fields[2].title}</h3>
                    </div>
                    <div> {ipoData[fields[2].key]}</div>
                  </td>
                  <td>
                    <div>
                      <h3>{fields[3].title}</h3>
                    </div>
                    <div>
                      {ipoData[fields[3].key]}
                      <br />
                      {fields[3].subKey &&
                        fields[3].subKey.key &&
                        fields[3].subKey.details.map((detailObj, index) => {
                          return (
                            <>
                              {!index === 0 &&
                              fields[3].subKey.deviderSymbol ? (
                                <span>{fields[3].subKey.deviderSymbol}</span>
                              ) : (
                                ""
                              )}
                              <small>
                                {ipoData[fields[3].subKey.key][
                                  detailObj.detailKey
                                ] + ` ${detailObj.suffix || ""}`}{" "}
                              </small>
                            </>
                          );
                        })}
                      {fields[3].subKey &&
                        !fields[3].subKey.key &&
                        fields[3].subKey.details.map((detailObj, index) => {
                          return (
                            <>
                              {!index === 0 &&
                              fields[3].subKey.deviderSymbol ? (
                                <span>{fields[3].subKey.deviderSymbol}</span>
                              ) : (
                                ""
                              )}
                              <small>
                                {ipoData[detailObj.detailKey] +
                                  ` ${detailObj.suffix || ""}`}
                              </small>
                            </>
                          );
                        })}
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
