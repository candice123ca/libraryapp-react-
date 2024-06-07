import React from 'react'
import NavBar from './NavBar'

const LibraryView = () => {
  return (
    <div>
        <NavBar/>
        <h3><center>BOOK DETAILS</center></h3>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">BOOK NO</th>
      <th scope="col">AUTHOR</th>
      <th scope="col">PUB YEAR</th>
      <th scope="col">PRICE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>1289</td>
      <td>100$</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Sam</td>
      <td>1279</td>
      <td>103$</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Raj</td>
      <td>1289</td>
      <td>100$</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>sneha</td>
      <td>1249</td>
      <td>100$</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Bobby</td>
      <td>1289</td>
      <td>100$</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Devi</td>
      <td>1289</td>
      <td>100$</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>Karthi</td>
      <td>1289</td>
      <td>100$</td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>Mark</td>
      <td>1289</td>
      <td>100$</td>
    </tr>
    
  </tbody>
</table>
    </div>
  )
}

export default LibraryView