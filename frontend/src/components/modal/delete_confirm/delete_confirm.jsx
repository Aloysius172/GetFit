import React from 'react';
// import ModalStyle from './modal.css'
import Style from './delete_confirm.css'


class DeleteConfirm extends React.Component {

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
                            {this.props.title}
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
                            <button id="delete-button" className='button'>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeleteConfirm;