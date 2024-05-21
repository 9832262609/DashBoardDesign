
import './Apd.css'

function App() {

  return (
    <>
    <div className="container">
      <div className="nav">
      <div className="icony">
      <i class="fa-solid fa-user"></i>
      <i class="fa-regular fa-pen-to-square"></i>
      <i class="fa-solid fa-briefcase"></i>
      <i class="fa-solid fa-circle-info"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-gear"></i>
      <i class="fa-solid fa-bookmark"></i>
      </div>
      <div className="icon2">
      <i class="fa-solid fa-right-to-bracket"></i>
      </div>
      </div>
      <div className="sidbar">
        <div className="first-div">
          <div className="logo">
            <p>Primary</p>
            <h2>Dashboard</h2>
          </div>
          <div className="left-side">
            <div className="user-input">
              <div className="search-bar">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder='Search'/>
              </div>
            </div>
            <div className="user-image">
              <img src="https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
          </div>
        </div>
        <div className="second-div">
          <p id='date'>Today's Data</p>
          <div className="second-container">
            <div className="content c-1">
              <div className="content-text">
              <div className="context-heading">
              <span>Payment amount</span> 
              <h4>$ 500.00</h4>
              </div>
              <div className="circle">
              <i class="fa-solid fa-dollar-sign"></i>
              </div>
              </div>
              <div className="card-container">
              <div className="first-star">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              </div>
              <div className="second-star">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              </div>
              <div className="third-star">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              </div>
              <div className="fourth-star">
                <p>3</p>
                <p>4</p>
                <p>8</p>
                <p>4</p>
              </div>
              </div>
            </div>


            <div className="content c-2">
              <div className="content-text">
              <div className="context-heading">
              <span>Payment order</span> 
              <h4>$ 200.00</h4>
              </div>
              <div className="circle">
              {/* <i class="fa-solid fa-dollar-sign"></i> */}
              <i style={{backgroundColor:"#7D017C"}} class="fa-solid fa-list"></i>
              </div>
              </div>
              <div className="card-container">
              <div className="first-star">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              </div>
              <div className="second-star">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              </div>
              <div className="third-star">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              </div>
              <div className="fourth-star">
                <p>5</p>
                <p>5</p>
                <p>4</p>
                <p>2</p>
              </div>
              </div>
            </div>

            <div className="content c-3" style={{backgroundColor:"#E7FDE8"}}>
              <div className="content-text">
              <div className="context-heading">
              <span>Payment customer</span> 
              <h4>$ 350.00</h4>
              </div>
              <div className="circle">
              {/* <i class="fa-solid fa-dollar-sign"></i> */}
              <i style={{backgroundColor:"#057E04"}} class="fa-solid fa-users"></i>
              </div>
              </div>
              <div className="card-container">
              <div className="first-star">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              </div>
              <div className="second-star">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              </div>
              <div className="third-star">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              </div>
              <div className="fourth-star">
                <p>8</p>
                <p>8</p>
                <p>9</p>
                <p>6</p>
              </div>
              </div>
            </div>


            <div className="content c-4">
              <div className="content-text">
              <div className="context-heading">
              <span>Payment proceed</span> 
              <h4>$ 150.00</h4>
              </div>
              <div className="circle">
              {/* <i class="fa-solid fa-dollar-sign"></i> */}
              <i style={{backgroundColor:"#0300FC"}} class="fa-solid fa-check"></i>
              </div>
              </div>
              <div className="card-container">
              <div className="first-star">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              </div>
              <div className="second-star">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              </div>
              <div className="third-star">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              </div>
              <div className="fourth-star">
                <p>7</p>
                <p>7</p>
                <p>4</p>
                <p>5</p>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="third-div">
          


        <div className="container-table">
        <p id='date'>Finance Data</p>
      <table>
        <thead>
          <tr>
            <th >Date</th>
            <th>Transaction Type</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2024-05-21</td>
            <td>Expenses</td>
            <td>Office supplies</td>
            <td>$250</td>
            <td>Office Expenses</td>
            <td>Pending</td>
            <td style={{color:"green"}}>Edit</td>
          </tr>
          <tr>
            <td>2024-05-22</td>
            <td>Income</td>
            <td>Client Payment</td>
            <td>$500</td>
            <td>Sales</td>
            <td>Completed</td>
            <td style={{color:"green"}}>Edit</td>
          </tr>
          <tr>
            <td>2024-05-23</td>
            <td>Expenses</td>
            <td>Travel Expenses</td>
            <td>$250</td>
            <td>Travel</td>
            <td>Pending</td>
            <td style={{color:"green"}}>Edit</td>
          </tr>
          <tr>
            <td>2024-05-24</td>
            <td>Expenses</td>
            <td>Marketin Campaign</td>
            <td>$300</td>
            <td>Marketing</td>
            <td>Approved</td>
            <td style={{color:"green"}}>Edit</td>
          </tr>
        </tbody>
        <thead> 
          <tr>
            {/* <th style={{columnSpan:"6"}}>Total: $1,000</th> */}
            <th colSpan={7}>Total: $1,000</th>
          </tr>
        </thead>
      </table>
    </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
