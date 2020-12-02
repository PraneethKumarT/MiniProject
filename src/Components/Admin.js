import React, {Component} from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class Admin extends Component{
    render(){
        return(
            <div className = "container">
                    <Pagination aria-label="Page navigation example">

      <PaginationItem active>
        <PaginationLink href="#">
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          3
        </PaginationLink>
      </PaginationItem>


    
    </Pagination>

            </div>
        )
    }
}

export default Admin;