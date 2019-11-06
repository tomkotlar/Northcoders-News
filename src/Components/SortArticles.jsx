import React from "react"
import {Grid, Dropdown, Radio } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'Date', value: "created_at" },
  { key: 2, text: 'Comments', value: "comment_count" },
  { key: 3, text: 'Votes', value: "votes"},
  { key: 4, text: 'Desc', value: "desc"},
  { key: 5, text: 'Asc', value: "asc"},
]
export default class SortArticles extends React.Component  {
state = {}

handleLocalChange = (e, { value }) => this.setState({ value }, 
  () => { this.props.handleChange(value)
});
  
render () {
  const { value } = this.state;

  return (
    <div>
      
               <Grid columns={2}>
              <Grid.Column>
                <Dropdown

                  onChange={this.handleLocalChange}
                  selection  options={options}
                  placeholder="Choose an option"
               
                  value={value}
                  name="sort_by"

                />
              </Grid.Column>
             
              </Grid>

             
              <Radio>
               <input
                 selection  options={options}
               type="radio"
               name="order_by"
               value={value}
               checked={this.props.order_by === "asc"}
               onChange={this.handleLocalChange}
             />
              </Radio>
              <Radio>
               <input
                 selection  options={options}
               type="radio"
               name="order_by"
               value={value}
               checked={this.props.order_by === "desc"}
               onChange={this.handleLocalChange}
             />
              </Radio> 

      {/* <h1>i am sorting articles</h1>

      <form>
        <label htmlFor="sort_by"> Filter </label>
        <select
          name="sort_by"
          onChange={props.handleChange}
          value={props.sort_by}
        >
          <option value="created_at">Date</option>
          <option value="comment_count">Comments</option>
          <option value="votes">Votes</option>
        </select>

        <label htmlFor="order_by">
          desc
          <input
            type="radio"
            name="order_by"
            checked={props.order_by === "desc"}
            value="desc"
            onChange={props.handleChange}
          />
        </label>

        <label htmlFor="order_by">
          asc
          <input
            type="radio"
            name="order_by"
            value="asc"
            checked={props.order_by === "asc"}
            onChange={props.handleChange}
          />
        </label>
      </form>
      <hr /> */}
    


</div>
  )
}
}