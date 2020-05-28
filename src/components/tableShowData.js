import React from "react";
import {storage,db} from "./Firebase/firebase";

class TableShowData extends React.Component{
    deleteRow(id){
        let desertRef = storage.ref().child(`images/${id}/picture.jpg`);
        // Delete the file
        desertRef.delete().then(function() {
            alert("Associated file deleted succesfully")
        }).catch(function(error) {
        // Uh-oh, an error occurred!
            alert("Associated file not deleted")
    });
        return db.ref('items').child(id).remove();
    }
    render() {
        return (
            <section className='list-items'>
                <table className="table">
                    <thead>
                    <tr key='head'>
                        <th scope="col">NAME</th>
                        <th scope="col">DESCRIPTION</th>
                        <th scope="col">PRICE</th>
                        <th scope="col">TYPE</th>
                        <th scope="col">COLOR</th>
                        <th scope="col">CREATED</th>
                        <th scope='col'>PHOTO</th>
                        <th scope="col">DELETE</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.items.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td>{item.type}</td>
                                <td>{item.color}</td>
                                <td>{item.dateCreated}</td>
                                <td>{item.photo}</td>
                                <td>
                                    <button onClick={() => this.deleteRow(item.id)}>X</button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </section>
        )
    }
}
export default TableShowData