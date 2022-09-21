import React from 'react';
// import ModalStyle from './modal.css'
import Style from './delete_confirm.css'
import { Redirect } from 'react-router';


class DeleteConfirm extends React.Component {
    constructor(props) {
        super(props)
        this.destroyRegimen = this.destroyRegimen.bind(this);
    }

    destroyRegimen(e) {
        e.preventDefault();
        debugger;

        this.props.deleteRegimen(this.props.regimen._id).then(() => this.props.history.push('/regimens'));
    }

    render() {

        return (
            <div className='delete-regi-modal'>
                <div className='delete-regi-container'>
                    <div className='are-you-sure'>
                        <div>
                            <div id="are-you-sure">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Are You Sure</div>   
                            <div id="you-want-to">You Want to Delete this Regimen?</div> 
                        </div>
                    </div>
                    <div className='delete-regi-title'>
                            {this.props.regimen.title}
                    </div>
                    <div className='title-underline'>

                    </div>
                    <div className='regi-delete-footer'>
                        <div>
                            <button id="cancel-button" className='button'
                                onClick={this.props.closeModal}>
                                Cancel
                            </button>
                        </div>  
                        <div>
                            <div>
                                <form onSubmit={this.destroyRegimen}>
                                    <input className='button' type="submit" value="Delete" />
                                </form>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeleteConfirm;