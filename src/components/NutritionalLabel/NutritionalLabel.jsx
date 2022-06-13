import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel(props) {
  console.log(props.selectedMenuItem)
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{props.selectedMenuItem.item_name}</h4>

      <ul className="fact-list">{nutritionFacts.forEach((fact) => (
          <NutritionalLabelFact 
          fact={fact} 
          key={fact.id} 
          attribute={fact.attribute}
          label={fact.label}
          />
      ))}</ul>
    </div>
  )
}

export function NutritionalLabelFact(props) {
  return (
    <li className="nutrition-fact">
      <span className="fact-label">{props.label}</span>{" "}
      <span className="fact-value">{props.attribute}</span>
    </li>
  )
}

export default NutritionalLabel
