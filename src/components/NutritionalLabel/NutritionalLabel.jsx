import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel(props) {
  console.log("In nutritional label", props)
  console.log(props.selectedMenuItem)
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{props.selectedMenuItem?.[props.item_name]}</h4>
      

      <ul className="fact-list">{nutritionFacts.map((fact) => (
          <NutritionalLabelFact 
          item={props.selectedMenuItem} 
          key={fact.id} 
          attribute={props.selectedMenuItem?.[fact.attribute]}
          label={fact.label}
          />   
      ))}</ul>
    </div>
  )
}

export function NutritionalLabelFact(props) {
  console.log("in nutritional label fact")
  return (
    <li className="nutrition-fact">
      <span className="fact-label">{props.label}</span>{" "}
      <span className="fact-value">{props.item?.[props.attribute]}</span>
    </li>
  )
}

export default NutritionalLabel
