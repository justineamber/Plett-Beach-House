import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import styles from "./pages-styles/pagestyles-css-modules.module.css"
import { GiSeahorse } from "react-icons/gi"
import NavbarBookingForm from "../components/navbar-booking-form/navbar-booking-form"
import { useStaticQuery, graphql, navigate } from "gatsby"
import Img from "gatsby-image"

const History = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "exteriorhome.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 250, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const onSubmit = (startDate, endDate, bookingValue, guestValue) => {
    navigate("/entabeni-booking-page/", {
      state: {
        endDate: endDate.format("YYYY-MM-DD"),
        startDate: startDate.format("YYYY-MM-DD"),
        bookingValue,
        guestValue,
      },
    })
  }
  return (
    <Layout pageInfo={{ pageName: "History" }}>
      <SEO title="History" keywords={[`Plett`, `Beach`, `House`, `History`]} />
      <div className={styles.bookingFormWrapperAllPages}>
        <NavbarBookingForm onSubmit={onSubmit} />
      </div>
      <div className={styles.paragraphContainerNoImage}>
        <GiSeahorse />
        <h2 className={styles.headingStyle}>About us</h2>
        <p className={styles.paragraphStyles}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className={styles.imageOpacityHover}>
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Exterior of Plett Beach House"
        />
      </div>
    </Layout>
  )
}
export default History
