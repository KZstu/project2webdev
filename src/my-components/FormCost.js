//Function Component
function FormCost(props) {
    //Component UI: HTML Rendering
    return(<>
        <h2>Cost</h2>
        <div class="row mt-2  ms-3">
            <label class="col-12 col-md-12 col-lg-4">Bond ($)</label>
            <input class="col-12 col-md-12 col-lg-7" type="number" value={props.sharedPropBond} onlyread />
        </div>  
        <div class="row mt-1  ms-3">
            <label class="col-12 col-md-12 col-lg-4">Service Fee ($)</label>
            <input class="col-12 col-md-12 col-lg-7" type="number" 
                   value={props.sharedPropWarranty ? 0 : 85} onlyread />
        </div>  
        <div class="row mt-1  ms-3">
            <label class="col-12 col-md-12 col-lg-4">Total ($)</label>
            <input class="col-12 col-md-12 col-lg-7" type="number" 
                   value={props.sharedPropBond + (props.sharedPropWarranty ? 0 : 85)} onlyread />
        </div>         
    </>);
}

//Export this component to the entire app, can be re-used or hooked into other Components
export default FormCost;







