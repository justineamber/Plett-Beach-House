import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import styles from "./pages-styles/pagestyles-css-modules.module.css"
import { GiSeahorse } from "react-icons/gi"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const Interests = () => {
  function handleClick(e) {
    e.preventDefault()
  }

  return (
    <Layout pageInfo={{ pageName: "Interests" }}>
      <SEO
        title="Interests"
        keywords={[
          `Plett`,
          `Beach`,
          `House`,
          `Interests`,
          `Perfect Holiday`,
          `Golf`,
          `Putt-putt`,
          `Hiking`,
          `Spa treatments`,
          `Foodie`,
          `Restaurent`,
          `Food markets`,
          `Safari`,
          `Fashion`,
          `Shopping`,
          `Polo`,
          `Animal sanctuaries`,
          `Watersports`,
        ]}
      />

      <div className={styles.paragraphContainerNoImage}>
        <GiSeahorse />
        <h2 className={styles.headingStyle}>Pick your experiences</h2>
        <p className={styles.paragraphStyles}>
          What kind of things interest you for your perfect holiday? <br />
          Select your interests below and get special offers through us.
        </p>
      </div>
      <Form>
        {["checkbox"].map(type => (
          <div key={`custom-inline-${type}`} className="mb-3">
            <Form.Check
              custom
              inline
              label="Fashion 	&amp; shopping"
              type={type}
              id={`custom-inline-${type}-Shopping`}
            />

            <Form.Check
              custom
              inline
              label="Foodie lover"
              type={type}
              id={`custom-inline-${type}-Foodie_lover`}
            />

            <Form.Check
              custom
              inline
              label="Golf &amp; putt-putt"
              type={type}
              id={`custom-inline-${type}-Golf`}
            />

            <Form.Check
              custom
              inline
              label="Hiking"
              type={type}
              id={`custom-inline-${type}-Hiking`}
            />

            <Form.Check
              custom
              inline
              label="Polo"
              type={type}
              id={`custom-inline-${type}-Polo`}
            />

            <Form.Check
              custom
              inline
              label="Safari's &amp; animal sanctuaries"
              type={type}
              id={`custom-inline-${type}-Safari_Animals`}
            />

            <Form.Check
              custom
              inline
              label="Spa &amp; relaxation"
              type={type}
              id={`custom-inline-${type}-Spa_relaxation`}
            />

            <Form.Check
              custom
              inline
              label="Watersports"
              type={type}
              id={`custom-inline-${type}-Watersports`}
            />
          </div>
        ))}
        <Button
          variant="primary"
          type="submit"
          className="mb-2"
          onClick={handleClick}
        >
          Submit
        </Button>
      </Form>
    </Layout>
  )
}
export default Interests
