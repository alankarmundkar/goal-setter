"use client"
import { useState } from "react"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import Button from '@mui/material/Button';

import "./style.scss"
import { departmentList, designationList, goals } from "@/data"

export default function Home() {
  const [department, setDepartment] = useState("")
  const [designation, setDesignation] = useState("")
  const [showGoals,setShowGoals] = useState(false)

  const handleDeptChange = event => {
    setShowGoals(false)
    setDesignation("")
    setDepartment(event.target.value)
  }
  const handleRoleChange = event => {
    setShowGoals(false)
    setDesignation(event.target.value)
  }

  const getGoals = () =>{
    setShowGoals(true)
  }

  return (
    <div className="home-contaier">
      <div className="page-header">
        <svg viewBox="0 0 20 20" width="35" height="35">
          <g fill-rule="evenodd" stroke="none" stroke-width="1">
            <g>
              <path
                d="M545.044722,322.996965 C546.777153,322.996965 548.181648,324.390104 548.181648,326.108674 C548.181648,327.827178 546.777153,329.220383 545.044722,329.220383 C543.312224,329.220383 541.907795,327.827178 541.907795,326.108674 C541.907795,325.687366 541.926517,325.417125 542.079404,325.050678 L544.042985,326.998474 C544.281676,327.259725 544.659693,327.328958 545.044722,327.317212 C545.383176,327.306909 545.721962,327.189113 545.980302,326.93285 C546.496982,326.420258 546.629294,325.458009 546.112614,324.945417 L544.228553,323.076502 C544.527843,322.982462 544.714073,322.996965 545.044722,322.996965 Z M545.465739,325.521533 C545.698278,325.752137 545.698278,326.12613 545.465739,326.356734 C545.349437,326.472101 545.197079,326.52972 545.044722,326.52972 C544.892364,326.52972 544.73994,326.472101 544.623704,326.356734 L539.790268,321.56222 L536.307808,321.03926 L533,317.757977 L536.378529,317.757977 L536.828722,317.311404 L536.828722,314 L540.13653,317.281217 L540.66783,320.762194 L545.465739,325.521533 Z M545.044722,318.217348 C549.438285,318.217348 553,321.750431 553,326.108674 C553,330.466917 549.438285,334 545.044722,334 C540.651159,334 537.089443,330.466917 537.089443,326.108674 C537.089443,324.567618 537.585217,323.329418 538.368043,322.165505 L539.314076,322.307581 L540.7322,323.714304 C540.254222,324.487818 539.912128,325.13494 539.912128,326.108674 C539.912128,328.920545 542.210062,331.200007 545.044722,331.200007 C547.879381,331.200007 550.177315,328.920545 550.177315,326.108674 C550.177315,323.296802 547.879381,321.017341 545.044722,321.017341 C544.152473,321.017341 543.445926,321.177858 542.714966,321.575082 L541.379009,320.249865 L541.218448,319.197972 C542.354018,318.549932 543.606553,318.217348 545.044722,318.217348 Z"
                transform="translate(-533 -314)"
              ></path>
            </g>
          </g>
        </svg>
        <h1 className="heading">Loginext Goal Setter</h1>
      </div>
      <div className="card">
        <form className="form">
        <FormControl className="formElement" size="small">
            <InputLabel id="demo-simple-select-label">Department</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={department}
              label="Department"
              onChange={handleDeptChange}
            >
              {departmentList?.map(dept => {
                return <MenuItem value={dept?.id} key={dept?.id}>{dept?.label}</MenuItem>
              })}
            </Select>
          </FormControl>

          <FormControl className="formElement" size="small">
            <InputLabel id="demo-simple-select-label">Designation</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={designation}
              label="Designation"
              onChange={handleRoleChange}
            >
              {designationList[department]?.map(role => {
                return <MenuItem value={role?.id} key={role.id}>{role?.label}</MenuItem>
              })}
            </Select>
          </FormControl>
          
          <Button variant="contained" disabled={designation ? false : true} onClick={getGoals}>Get Goals</Button>
        </form>
      <div>
       { showGoals && <h1>Goals: </h1>}
        <ul className="goals-list">
          { showGoals && goals[designation]?.map((goal, index)=>{
            return(
              <li key={`goal_${index}`}>
                <h2 className="goal-title">{goal.title}</h2>
                <p className="goals-description">{goal.description}</p>
              </li>
            )
          })}
        </ul>
      </div>
      </div>
    </div>
  )
}
