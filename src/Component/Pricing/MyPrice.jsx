import './MyStyle.css'

const MyPrice = () => {
  return (
       <section className="pricing">
        <h2 className="text-center">Affordable pricing</h2>
        <p className="text-center">Bill me <span className="highlight">monthly</span> or <span className="highlight2">yearly</span>
        </p>
        <div className="pricing-container display-flex">
            <div className="pricing-plan">
                <div className="plan-header1 display-flex justify-aligns">Like a Pussy</div>
                <div className="plan-header"><span>Free</span>/ Forever</div>
                <ul className="plan-features">
                    <li>Components-driven system</li>
                    <li>Sales-boosting landing pages</li>
                    <li>Awesome Feather icons pack</li>
                </ul>
                <a href="#" className="plan-button display-flex justify-aligns2">Try for free</a>
            </div>
            <div className="pricing-plan second">
                <div className="plan-header1 display-flex justify-aligns">
                    <div className="plan-header1"><i className="fa-solid fa-user"></i>
                        Individual</div>
                    <a href="#" className="plan-main-button display-flex justify-aligns2">rest!</a>
                </div>
                <div className="plan-header"><span>24$</span>/ month</div>
                <ul className="plan-features">
                    <li>Components-driven system</li>
                    <li>Sales-boosting landing pages</li>
                    <li>Awesome Feather icons pack</li>
                    <li>Themed into 3 different styles</li>
                    <li>We help to learn figma</li>

                </ul>
                <a href="#" className="plan-button display-flex justify-aligns2">Regular License</a>
            </div>
            <div className="pricing-plan third">
                <div className="plan-header1 display-flex justify-aligns">
                    <div className="plan-header1">
                        <i className="fa-solid fa-user-group"></i>
                        Corporate
                    </div>
                    <a href="#" className="plan-main-button">rest!</a>
                </div>
                <div className="plan-header"><span>12$</span>/ month</div>
                <ul className="plan-features">
                    <li>Components-driven system</li>
                    <li>Sales-boosting landing pages</li>
                    <li>Awesome Feather icons pack</li>
                    <li>Themed into 3 different styles</li>
                </ul>
                <a href="#" className="plan-button display-flex justify-aligns2">Extended License</a>
            </div>
        </div>
    </section>
  )
}

export default MyPrice