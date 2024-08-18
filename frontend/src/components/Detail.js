
import styles from "../css/detail.module.css";
import { useParams } from 'react-router-dom';
import Moment from "react-moment" 
import { apis } from "../config";
import { useFetchData } from "../hooks/useFetchData";


export default function Detail() {
    const { id } = useParams();

    let api = apis.detailpage.replace("{{ID}}", id)
    
    let { data:ipoDetails , error, isLoading } = useFetchData(api);
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;


    return (
        <div>{
            isLoading ? <p> Loading... </p> : 
            error ? <p> No Data Found</p> :
            <main>
                <section className={styles['ipo-details']}>
                    <div className={styles['detail-header']}>
                                <div className={styles['company-info']}>
                                    
                                       <a href="/"> <img src="https://t4.ftcdn.net/jpg/02/93/94/41/360_F_293944111_uTDy3HJcStHMbPTgC6GDSFGWudBiQZ5A.jpg" alt="back icon" /></a>
                                    
                            <div className={styles['info']}>
                                <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/OYO_Rooms_%28logo%29.png/600px-OYO_Rooms_%28logo%29.png" 
                                    height={45} 
                                    width={45} 
                                    alt="OYO Logo" 
                                />
                            </div>
                            <div className={styles['info']}>
                                <h1>{ipoDetails.companyName.split( )[0]}</h1>
                                <p>{ipoDetails.companyName}</p>
                            </div>
                        </div>
                        
                            <div className={styles['company-info2']}>
                            <button> <img src="https://cdn-icons-png.flaticon.com/512/1092/1092004.png" alt="download" height={20} width={20} /></button>
                            <button className={styles['apply']}>Apply</button>
                        </div>
                    </div>
                
                    <div className={styles['ipo-info']}>
                        <div className={styles['ipo-details-card']}>
                            <h2>IPO details</h2>
                            <ul className={styles['detail-ul']}>
                                <li className={styles['detail-li']}><strong>Issue size:</strong> {ipoDetails.issueSize}</li>
                                <li className={styles['detail-li']}><strong>Price range:</strong> {ipoDetails.priceRange}</li>
                                <li className={styles['detail-li']}><strong>Minimum amount:</strong> {ipoDetails.minAmount}</li>
                                <li className={styles['detail-li']}><strong>Lot size:</strong> {ipoDetails.minInvestQty}</li>
                                <li className={styles['detail-li']}><strong>Issue dates:</strong>    <Moment format="D MMM">{ipoDetails.issueDates.start}</Moment> - 
                                <Moment format="D MMM YY">{ipoDetails.issueDates.end}</Moment></li>
                                <li className={styles['detail-li']}><strong>Listed on:</strong> {ipoDetails.listedOn}</li>
                                <li className={styles['detail-li']}><strong>Listed price:</strong> {ipoDetails.listedPrice}</li>
                                <li className={styles['detail-li']}><strong>Listing gains:</strong>{ipoDetails.listedGains}</li>
                            </ul>
                        </div>
                    </div>
    
                    <div className={styles['ipo-info']}>
                        <h2>IPO timeline</h2>
                        <ul className={styles['detail-info-ul-checkmark']}>
                            <li className={styles['detail-info-li']}> <div> <img height={45} width={45} src="../../checkmark.png" alt="img" /> </div> <div> <h4 className={styles['detail-info-h']}>  Bidding starts</h4> <span className="detail-info-span">{ipoDetails.IPOtimeline.biddingStartDate}</span></div> </li>
                            <li className={styles['detail-info-li']}> <div> <img height={45} width={45} src="../../checkmark.png" alt="img" /> </div> <div> <h4 className={styles['detail-info-h']}>  Bidding ends</h4> <span className="detail-info-span">{ipoDetails.IPOtimeline.biddingEndDate}</span></div> </li>
                            <li className={styles['detail-info-li']}> <div> <img height={45} width={45} src="../../checkmark.png" alt="img" /> </div> <div> <h4 className={styles['detail-info-h']}>  Allotment finaliation </h4> <span className="detail-info-span">{ipoDetails.IPOtimeline.allotmentFinalization}</span></div> </li>
                            <li className={styles['detail-info-li']}> <div> <img height={45} width={45} src="../../checkmark.png" alt="img" /> </div> <div> <h4 className={styles['detail-info-h']}>  Refund initiation </h4> <span className="detail-info-span">{ipoDetails.IPOtimeline.refundInitiation}</span></div> </li>
                            <li className={styles['detail-info-li']}> <div> <img height={45} width={45} src="../../checkmark.png" alt="img" /> </div> <div> <h4 className={styles['detail-info-h']}>  Demat transfer</h4> <span className="detail-info-span">{ipoDetails.IPOtimeline.dematTransfer}</span></div> </li>
                            <li className={styles['detail-info-li']}> <div> <img height={45} width={45} src="../../checkmark.png" alt="img" /> </div> <div> <h4 className={styles['detail-info-h']}>  Listing date</h4> <span className="detail-info-span">{ipoDetails.IPOtimeline.listingDate}</span></div> </li>
                        </ul>
                    </div>
    
                    <div className={styles['company-description']}>
                        <h2>About the company</h2>
                                <p>{ipoDetails.aboutCompany }</p>
                    </div>
                </section>
            </main>
                
        }
            
        </div>
    );
}
