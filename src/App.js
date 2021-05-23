import logo from './heroimage@2x.png';
import icon1 from './freshworks.png'
import icon2 from './goop.png'
import icon3 from './study.png'
import newPricingIcon from './crack-new-segments.svg'
import sbSectionImage from './sb-section-console.svg'
import automationImage from './subscription-automation.svg'
import billingIcon from './billing-experiments.svg'
import integration from './integration.svg'
import testimonialImage from './nathanfeld-drawboard.png';
import { Grid, Button } from './Components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Grid container justify="space-between">
        <Grid container className="actionItems" spacing={3} alignItems="flex-end">
          <Grid item>
            <p className="logo">Chargebee</p>
          </Grid>
          {["Product", "Pricing", "Solutions", "Customers", "Resources"].map(label => (
            <Grid item key={label}>
              <p className="actionItem">{label}</p>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={3} className="headerActions">
          <Grid item>
            <Button classes={{ label: "scheduleDemoLabel" }}>{"Schedule a Demo"}</Button>
          </Grid>
          <Grid item>
            <Button
              className="logInButton"
              variant="contained"
              classes={{ label: "logInButtonLabel" }}
            >
              {"Log In"}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <p className="subscription">{"Subscription Billing & Revenue Operations"}</p>
      <p className="business">{"For Business\nDesigned for Growth"}</p>
      <p className="subText">{"Chargebee gives you the freedom to deploy the right\ngrowth strategies, while automating everything else in\nyour order-to-revenue workflow."}</p>
      <Grid container className="buttons" spacing={2}>
        <Grid item>
          <Button
            variant="contained"
            className="getButton"
            classes={{ label: "getButtonLabel" }}
          >
            Get a Consultation
              </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            className="signUpButton"
            classes={{ label: "signupButtonLabel" }}
          >
            Signup for Free
            </Button>
        </Grid>
      </Grid>
      <p className="trustedText">{"Trusted by leading brands to process over\n$3Bn in recurring revenue."}</p>
      <Grid container justify="space-between" className="icons">
        <Grid item xs={2}>
          <img src={icon2} alt="icon2" className="icon" />
        </Grid>
        <Grid item xs={3}>
          <img src={icon3} alt="icon3" className="icon" />
        </Grid>
        <Grid item xs={3}>
          <img src={icon1} alt="icon1" className="icon" />
        </Grid>
      </Grid>


      <Grid container className="section2">
        <Grid container item className="subsection1" direction="column">
          <Grid container>
            <Grid item className="block" />
            <p className="deployText">{"DEPLOY STRATEGIES"}</p>
          </Grid>
          <p className="challengeText">{"What does this\nchallenge make\npossible?"}</p>
          <p className="section2Text">{"A changing world requires an evolving\nbusiness strategy. Chargebee lets you\nadapt business models and deploy\nstrategies as fast as you can think of them."}</p>
        </Grid>
        <Grid container item className="subsection2" alignItems="center" justify="space-between">
          <Grid container className="box rotate" direction="column">
            {/* <img src={newPricingIcon} alt="icon1" className="newPricingIcon" />
            <p className="rollText">{"Roll"}</p>
            <p className="newPricingLabel">New Pricing</p>
            <p className="boxDescriptionText">{"Improve value-price fit.\nIterate and launch new\npricing structures without\nthe dev effort."}</p>
            <Button className="boxSubmit" classes={{ label: "boxSubmitLabel" }}>{"Change Pricing"}</Button> */}
          </Grid>
          <Button className="arrowButton" classes={{ label: "arrowButtonLabel" }}>{"<"}</Button>
          <Grid container className="box middleBox" direction="column">
            <img src={newPricingIcon} alt="icon1" className="newPricingIcon" />
            <p className="rollText">{"Roll"}</p>
            <p className="newPricingLabel">New Pricing</p>
            <p className="boxDescriptionText">{"Improve value-price fit.\nIterate and launch new\npricing structures without\nthe dev effort."}</p>
            <Button className="boxSubmit" classes={{ label: "boxSubmitLabel" }}>{"Change Pricing"}</Button>
          </Grid>
          <Button className="arrowButton" classes={{ label: "arrowButtonLabel" }}>{">"}</Button>
          <Grid container className="box rotate" direction="column">
            {/* <img src={newPricingIcon} alt="icon1" className="newPricingIcon" />
            <p className="rollText">{"Roll"}</p>
            <p className="newPricingLabel">New Pricing</p>
            <p className="boxDescriptionText">{"Improve value-price fit.\nIterate and launch new\npricing structures without\nthe dev effort."}</p>
            <Button className="boxSubmit" classes={{ label: "boxSubmitLabel" }}>{"Change Pricing"}</Button> */}
          </Grid>
          <Grid item className="sbSectionImage">
            <img src={sbSectionImage} alt="logo2" />
          </Grid>
        </Grid>
      </Grid>

      <Grid container className="section2">
        <Grid container item className="subsection1 noTopPadding" direction="column">
          <Grid container>
            <Grid item className="block" />
            <p className="deployText">{"BEYOND BILLING "}</p>
          </Grid>
          <p className="challengeText">{"Streamline Your\nEntire RevOps\nWorkflow"}</p>
          <p className="section2Text">{"The next big revenue opportunity\nneed not be familiar. Chargebee\ngives you the infrastructure to\ndiscover and turn every revenue\npotential into a business outcome."}</p>
        </Grid>
        <Grid container className="section3subsection2" direction="column">
          <Grid container justify="space-between" className="headerTextContainer">
            <p className="section3HeaderText selected">{"Subscription\nAutomation\n\n"}</p>
            <p className="section3HeaderText">{"Billing\nExperiments\n\n"}</p>
            <p className="section3HeaderText">{"Extensible\nPlatform\n\n"}</p>
          </Grid>
          <Grid container>
            <img src={automationImage} alt="logo3" className="automationImage" />
            <Grid container className="automationDescriptionBox" direction="column">
              <p className="automateText">{"Automate the\nOrder-to-Revenue\nLifecycle"}</p>
              <p className="automationDescriptionText">{"Collect recurring payments\nand automate your subscription\nbilling logic - from checkout to\nreconciliation. "}</p>
              <Button className="boxSubmit" classes={{ label: "boxSubmitLabel" }}>{"Subscription Automation"}</Button>
            </Grid>
          </Grid>
          <Grid container className="thirdSectionSubs">
            <img src={billingIcon} alt="logo3" className="automationImage" />
            <Grid container className="automationDescriptionBox" direction="column">
              <p className="automateText">{"Evolve your Billing\nWorkflow to Fit Your\nBusiness Strategy"}</p>
              <p className="automationDescriptionText">{"Adjust Pricing Structures, product\nbundles, acquisition flows and\nrecovery processes to maximize\nrevenue."}</p>
              <Button className="boxSubmit" classes={{ label: "boxSubmitLabel" }}>{"Billing Experiments"}</Button>
            </Grid>
          </Grid>
          <Grid container className="thirdSectionSubs">
            <img src={integration} alt="logo3" className="automationImage" />
            <Grid container className="automationDescriptionBox" direction="column">
              <p className="automateText">{"Scale Your Revenue Stack\nfor Each Stage of Growth"}</p>
              <p className="automationDescriptionText">{"Upgrade finance,\naccounting, CRM, and more\non the revenue engine that\nscales with you. "}</p>
              <Button className="boxSubmit" classes={{ label: "boxSubmitLabel" }}>{"Extensible Platform"}</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <img src={logo} alt="logo2" width="1920" height="1080" className="heroImage" />
      <Grid container className="itemsContainer">
        <Grid container className="Items" spacing={3} justify="center">
          {["Rethink Pricing", "Automate Finops", "Go Global"].map(label => (
            <Grid item key={label}>
              <p className="Item">{label}</p>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid container className="forthSection" justify="space-between">
        <Grid item className="sectionFourth">
          <h2 className="AchievedText"> Achieved 20x ROI <br></br> with Chargebee </h2>
          <div className="forthSectionDescription">
            <p>Chargebee has all the concepts of metered billing, flat and tiered<br></br> pricing. If we deided to change the way we want to bill or the price <br></br>structure, it is accounted for already. </p>
          </div>
          <p className="caseStudy">{"Read Case Study"}</p>
        </Grid>
        <Grid item className="forthSectionTestimonial" alignItems="center">
          <img src={testimonialImage} alt="Testimonial" className="testimonialImage" />
          <p className="nathan">{"Nathan Field,\nDrawboard"}</p>
        </Grid>
      </Grid>


      <Grid container className="section5">
        <Grid container item className="subsection1 noTopPadding" direction="column">
          <Grid container>
            <Grid item className="block" />
            <p className="deployText">{"FOR THE MODERN CFO "}</p>
          </Grid>
          <p className="challengeText">{"Spend less time Closing,\nMore time Driving."}</p>
          {/* <p className="section2Text">{"The next big revenue opportunity\nneed not be familiar. Chargebee\ngives you the infrastructure to\ndiscover and turn every revenue\npotential into a business outcome."}</p> */}
        </Grid>
      </Grid>

      <Grid container className="LastSection" justify="space-between">
        <Grid item className="LastText">
          <h1>Experience the Smartest Way<br></br>to Automate Recurring Payments</h1>
        </Grid>
        <Grid container item spacing={3} className="Lastbutton">
          <Grid item>
            <Button className="Demo" classes={{ label: "lastButtonLabel" }}>Schedule a Demo</Button>
          </Grid>
          <Grid item>
            <Button className="logIn" classes={{ label: "lastButtonLabel2" }}> Sign up for Free </Button>
          </Grid>
        </Grid>



      </Grid>

    </div>
  );
}

export default App;
