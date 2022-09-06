import React from 'react';
import { Title } from '../../common/Title';
import {useSelector} from 'react-redux';
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from 'next/router';
import { sendOrder } from '../../../services/CartService';

export default function CheckoutBody () {
    const cartData = useSelector(state => state.cart);
    const router = useRouter();
    const orderPlace = (e, cart) => {
        //supprimer le panier
        
    }
    const ini = {
        billing_first_name: "",
        billing_last_name: "",
        billing_address_1: "",
        billing_city: "",
        billing_state: "",
        billing_email: "",
        billing_postcode: "",
        ship_to_different_address: "",
        shipping_first_name: "",
        shipping_last_name: "",
        shipping_address_1: "",
        shipping_address_2: "",
        shipping_city: "",
        shipping_state: "",
        shipping_postcode: "",
        order_comments: "",
    }
    const initialValues = {
        shipping_country: "",
        billing_first_name: "",
        billing_last_name: "",
        billing_company: "",
        billing_address_1: "",
        billing_address_2: "",
        billing_city: "",
        billing_state: "",
        billing_postcode: "",
        billing_email: "",
        billing_phone: "",
        ship_to_different_address: "",
        shipping_first_name: "",
        shipping_last_name: "",
        shipping_company: "",
        shipping_address_1: "",
        shipping_address_2: "",
        shipping_city: "",
        shipping_state: "",
        shipping_postcode: "",
        order_comments: "",
      };
    const validationSchema = Yup.object({
        billing_first_name: Yup.string().required("Please set your firstname !").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
        billing_last_name: Yup.string().required("Please set your lastname !").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),

        billing_address_1: Yup.string().required("Your first address is required"),
        billing_city: Yup.string().required("Your city is required"),
        billing_state: Yup.string().required("Your country is required"),
        billing_email: Yup.string().email("Invalid email format").required("Required"),
        billing_postcode: Yup.string().required("Required"),

        // shipping_first_name: Yup.string().required("Required"),
        // shipping_last_name: Yup.string().required("Required"),
        // shipping_address_1: Yup.string().required("Required"),
        // shipping_address_2: Yup.string().required("Required"),
        // shipping_city: Yup.string().required("Required"),
        // shipping_state: Yup.string().required("Required"),
        // shipping_postcode: Yup.string().required("Please enter the required field"),
        // order_comments: Yup.string().max(100),
        //matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")

    });
    function onSubmit(values) {
        const registred = {
            ...cartData,
            "customer": {
            "email": values.billing_email,
            "phone": values.billing_phone,
            "billingAdress": {
                "civility": values.shipping_country,
                "firstName": values.billing_first_name,
                "lastName": values.billing_last_name,
                "zipCode": values.billing_postcode,
                "street": values.billing_address_1,
                "companyName": values.billing_company,
                "county": values.billing_city,
                "city": values.billing_state
            },
            "shippingAdress": {
                "civility": values.shipping_country,
                "firstName": values.shipping_first_name,
                "lastName": values.shipping_last_name,
                "zipCode": values.shipping_postcode,
                "street": values.shipping_address_1,
                "companyName": values.shipping_company,
                "county": values.shipping_city,
                "city": values.shipping_state
              }},
            "paymentMethod": "paypal",
            // billing_address_2: values.billing_address_2,
            // ship_to_different_address: values.ship_to_different_address,
            // shipping_address_2: values.shipping_address_2,
            // order_comments: values.order_comments,
        };
        sendOrder("orders", registred).then((response)=>{console.log("success");})
     
        localStorage.removeItem('cartId');

        router.push("/",{ replace: true })
    }
      const formik = useFormik({ initialValues, onSubmit, validationSchema });

    return(
        <>
            <Title categoryName="Checkout" />
            <div className="single-product-area">
                <div className="zigzag-bottom" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="product-content-right">
                                <div className="woocommerce">
                                    <form onSubmit={formik.handleSubmit} encType="multipart/form-data" action="#" className="checkout" method="post" name="checkout">
                                        <div id="customer_details" className="col2-set">
                                            <div className="col-6">
                                                <div className="woocommerce-billing-fields">
                                                    <h3>Billing Details</h3>
                                                    <p id="billing_country_field" className="form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated">
                                                        <label  htmlFor="billing_country">Civility <abbr title="required" className="required">*</abbr>
                                                        </label>
                                                        <select className="country_to_state country_select"
                                                            id="billing_country"
                                                            name="billing_country"
                                                            value={formik.values.shipping_country}
                                                            onChange={formik.handleChange}
                                                        >
                                                            <option value="AX">Mr</option>
                                                            <option value="AF">Mlle</option>
                                                            <option value="AF">Mme</option>
                                                        </select>
                                                    </p>
                                                    <p id="billing_first_name_field" className="form-row form-row-first validate-required">
                                                        <label htmlFor="billing_first_name">First Name <abbr title="required" className="required">*</abbr>
                                                        </label>
                                                        <input type="text" 
                                                            
                                                            id="billing_first_name"
                                                            name="billing_first_name"
                                                            className="input-text "
                                                            value={formik.values.billing_first_name}
                                                            onChange={formik.handleChange}
                                                        />
                                                        {formik.touched.billing_first_name && formik.errors.billing_first_name ? (
                                                            <div className="alert alert-danger" role="alert">{formik.errors.billing_first_name}</div>
                                                        ) : null}
                                                    </p>
                                                    <p id="billing_last_name_field" className="form-row form-row-last validate-required">
                                                        <label htmlFor="billing_last_name">Last Name <abbr title="required" className="required">*</abbr>
                                                        </label>
                                                        <input type="text"
                                                             
                                                            id="billing_last_name"
                                                            name="billing_last_name"
                                                            className="input-text "
                                                            value={formik.values.billing_last_name}
                                                            onChange={formik.handleChange}
                                                        />
                                                        {formik.touched.billing_last_name && formik.errors.billing_last_name ? (
                                                            <div className="alert alert-danger" role="alert">{formik.errors.billing_last_name}</div>
                                                        ) : null}
                                                    </p>
                                                    <div className="clear" />
                                                    <p id="billing_company_field" className="form-row form-row-wide">
                                                        <label  htmlFor="billing_company">Company Name</label>
                                                        <input type="text"
                                                            
                                                            
                                                            id="billing_company"
                                                            name="billing_company"
                                                            className="input-text "
                                                            value={formik.values.billing_company}
                                                            onChange={formik.handleChange}
                                                        />
                                                        {formik.touched.billing_last_name && formik.errors.billing_last_name ? (
                                                            <div className="alert alert-danger" role="alert">{formik.errors.billing_last_name}</div>
                                                        ) : null}
                                                    </p>
                                                    <p id="billing_address_1_field" className="form-row form-row-wide address-field validate-required">
                                                        <label  htmlFor="billing_address_1">Address <abbr title="required" className="required">*</abbr>
                                                        </label>
                                                        <input type="text"
                                                            
                                                            placeholder="Street address"
                                                            id="billing_address_1"
                                                            name="billing_address_1"
                                                            className="input-text "
                                                            value={formik.values.billing_address_1}
                                                            onChange={formik.handleChange}
                                                        />
                                                        {formik.touched.billing_address_1 && formik.errors.billing_address_1 ? (
                                                            <div className="alert alert-danger" role="alert">{formik.errors.billing_address_1}</div>
                                                        ) : null}
                                                    </p>
                                                    <p id="billing_address_2_field" className="form-row form-row-wide address-field">
                                                        <input type="text"
                                                            
                                                            placeholder="Apartment, suite, unit etc. (optional)"
                                                            id="billing_address_2"
                                                            name="billing_address_2"
                                                            className="input-text "
                                                            value={formik.values.billing_address_2}
                                                            onChange={formik.handleChange}
                                                        />
                                                        {formik.touched.billing_address_2 && formik.errors.billing_address_2 ? (
                                                            <div className="alert alert-danger" role="alert">{formik.errors.billing_address_2}</div>
                                                        ) : null}
                                                    </p>
                                                    <p id="billing_city_field" className="form-row form-row-wide address-field validate-required" data-o_class="form-row form-row-wide address-field validate-required">
                                                        <label  htmlFor="billing_city">Town / City <abbr title="required" className="required">*</abbr>
                                                        </label>
                                                        <input type="text"
                                                            
                                                            placeholder="Town / City"
                                                            id="billing_city"
                                                            name="billing_city"
                                                            className="input-text "
                                                            value={formik.values.billing_city}
                                                            onChange={formik.handleChange}
                                                        />
                                                        {formik.touched.billing_city && formik.errors.billing_city ? (
                                                            <div className="alert alert-danger" role="alert">{formik.errors.billing_city}</div>
                                                        ) : null}
                                                    </p>
                                                    <p id="billing_state_field" className="form-row form-row-first address-field validate-state" data-o_class="form-row form-row-first address-field validate-state">
                                                        <label  htmlFor="billing_state">County</label>
                                                        <input type="text"
                                                            id="billing_state"
                                                            name="billing_state"
                                                            placeholder="State / County"
                                                            
                                                            className="input-text "
                                                            value={formik.values.billing_state}
                                                            onChange={formik.handleChange}
                                                        />
                                                        {formik.touched.billing_state && formik.errors.billing_state ? (
                                                            <div className="alert alert-danger" role="alert">{formik.errors.billing_state}</div>
                                                        ) : null}
                                                    </p>
                                                    <p id="billing_postcode_field" className="form-row form-row-last address-field validate-required validate-postcode" data-o_class="form-row form-row-last address-field validate-required validate-postcode">
                                                        <label  htmlFor="billing_postcode">Postcode <abbr title="required" className="required">*</abbr>
                                                        </label>
                                                        <input type="text"
                                                            
                                                            placeholder="Postcode / Zip"
                                                            id="billing_postcode"
                                                            name="billing_postcode"
                                                            className="input-text "
                                                            value={formik.values.billing_postcode}
                                                            onChange={formik.handleChange}
                                                        />
                                                        {formik.touched.billing_postcode && formik.errors.billing_postcode ? (
                                                            <div className="alert alert-danger" role="alert">{formik.errors.billing_postcode}</div>
                                                        ) : null}
                                                    </p>
                                                    <div className="clear" />
                                                    <p id="billing_email_field" className="form-row form-row-first validate-required validate-email">
                                                        <label  htmlFor="billing_email">Email Address <abbr title="required" className="required">*</abbr>
                                                        </label>
                                                        <input type="text"
                                                             
                                                            id="billing_email"
                                                            name="billing_email"
                                                            className="input-text "
                                                            value={formik.values.billing_email}
                                                            onChange={formik.handleChange}
                                                        />
                                                        {formik.touched.billing_email && formik.errors.billing_email ? (
                                                            <div className="alert alert-danger" role="alert">{formik.errors.billing_email}</div>
                                                        ) : null}
                                                    </p>
                                                    <p id="billing_phone_field" className="form-row form-row-last validate-required validate-phone">
                                                        <label  htmlFor="billing_phone">Phone <abbr title="required" className="required">*</abbr>
                                                        </label>
                                                        <input type="text"
                                                            
                                                            
                                                            id="billing_phone"
                                                            name="billing_phone"
                                                            className="input-text "
                                                            value={formik.values.billing_phone}
                                                            onChange={formik.handleChange}
                                                        />
                                                        {formik.touched.billing_phone && formik.errors.billing_phone ? (
                                                            <div className="alert alert-danger" role="alert">{formik.errors.billing_phone}</div>
                                                        ) : null}
                                                    </p>
                                                    <div className="clear" />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="woocommerce-shipping-fields">
                                                    <h3 id="ship-to-different-address">
                                                        <label className="checkbox" htmlFor="ship-to-different-address-checkbox">Ship to a different address?</label>
                                                        <input type="checkbox"
                                                            name="ship_to_different_address"
                                                            defaultChecked="checked"
                                                            className="input-checkbox"
                                                            id="ship-to-different-address-checkbox"
                                                            value={formik.values.ship_to_different_address}
                                                            onChange={formik.handleChange}
                                                        />
                                                        {formik.touched.ship_to_different_address && formik.errors.ship_to_different_address ? (
                                                            <div className="alert alert-danger" role="alert">{formik.errors.ship_to_different_address}</div>
                                                        ) : null}
                                                    </h3>
                                                    <div className="shipping_address" style={{ display: 'block' }}>
                                                        <p id="shipping_country_field" className="form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated">
                                                            <label  htmlFor="shipping_country">Civility <abbr title="required" className="required">*</abbr>
                                                            </label>
                                                            <select className="country_to_state country_select"
                                                                id="shipping_country"
                                                                name="shipping_country">
                                                                <option value="AX">Mr</option>
                                                                <option value="AF">Mlle</option>
                                                                <option value="AF">Mme</option>
                                                            </select>
                                                        </p>
                                                        <p id="shipping_first_name_field" className="form-row form-row-first validate-required">
                                                            <label  htmlFor="shipping_first_name">First Name <abbr title="required" className="required">*</abbr>
                                                            </label>
                                                            <input type="text"
                                                                 
                                                                id="shipping_first_name"
                                                                name="shipping_first_name"
                                                                className="input-text "
                                                                value={formik.values.shipping_first_name}
                                                                onChange={formik.handleChange}
                                                            />
                                                            {formik.touched.shipping_first_name && formik.errors.shipping_first_name ? (
                                                            <div className="alert alert-danger" role="alert">{formik.errors.shipping_first_name}</div>
                                                        ) : null}
                                                        </p>
                                                        <p id="shipping_last_name_field" className="form-row form-row-last validate-required">
                                                            <label  htmlFor="shipping_last_name">Last Name <abbr title="required" className="required">*</abbr>
                                                            </label>
                                                            <input type="text"
                                                                 
                                                                id="shipping_last_name"
                                                                name="shipping_last_name"
                                                                className="input-text "
                                                                value={formik.values.shipping_last_name}
                                                                onChange={formik.handleChange}
                                                            />
                                                            {formik.touched.shipping_last_name && formik.errors.shipping_last_name ? (
                                                            <div className="alert alert-danger" role="alert">{formik.errors.shipping_last_name}</div>
                                                        ) : null}
                                                        </p>
                                                        <div className="clear" />
                                                        <p id="shipping_company_field" className="form-row form-row-wide">
                                                            <label  htmlFor="shipping_company">Company Name</label>
                                                            <input type="text"
                                                                 
                                                                id="shipping_company"
                                                                name="shipping_company"
                                                                className="input-text "
                                                                value={formik.values.shipping_company}
                                                                onChange={formik.handleChange}
                                                            />
                                                            {formik.touched.shipping_company && formik.errors.shipping_company ? (
                                                            <div className="alert alert-danger" role="alert">{formik.errors.shipping_company}</div>
                                                        ) : null}
                                                        </p>
                                                        <p id="shipping_address_1_field" className="form-row form-row-wide address-field validate-required">
                                                            <label  htmlFor="shipping_address_1">Address <abbr title="required" className="required">*</abbr>
                                                            </label>
                                                            <input type="text"
                                                                 placeholder="Street address"
                                                                id="shipping_address_1"
                                                                name="shipping_address_1"
                                                                className="input-text "
                                                                value={formik.values.shipping_address_1}
                                                                onChange={formik.handleChange}
                                                            />
                                                             {formik.touched.shipping_address_1 && formik.errors.shipping_address_1 ? (
                                                            <div className="alert alert-danger" role="alert">{formik.errors.shipping_address_1}</div>
                                                        ) : null}
                                                        </p>
                                                        <p id="shipping_address_2_field" className="form-row form-row-wide address-field">
                                                            <input type="text"
                                                            
                                                                placeholder="Apartment, suite, unit etc. (optional)"
                                                                id="shipping_address_2"
                                                                name="shipping_address_2"
                                                                className="input-text "
                                                                value={formik.values.shipping_address_2}
                                                                onChange={formik.handleChange}
                                                            />
                                                            {formik.touched.shipping_address_2 && formik.errors.shipping_address_2 ? (
                                                            <div className="alert alert-danger" role="alert">{formik.errors.shipping_address_2}</div>
                                                        ) : null}
                                                        </p>
                                                        <p id="shipping_city_field" className="form-row form-row-wide address-field validate-required" data-o_class="form-row form-row-wide address-field validate-required">
                                                            <label  htmlFor="shipping_city">Town / City <abbr title="required" className="required">*</abbr>
                                                            </label>
                                                            <input type="text"
                                                                
                                                                placeholder="Town / City"
                                                                id="shipping_city"
                                                                name="shipping_city"
                                                                className="input-text "
                                                                value={formik.values.shipping_city}
                                                                onChange={formik.handleChange}
                                                            />
                                                            {formik.touched.shipping_city && formik.errors.shipping_city ? (
                                                            <div className="alert alert-danger" role="alert">{formik.errors.shipping_city}</div>
                                                        ) : null}
                                                        </p>
                                                        <p id="shipping_state_field" className="form-row form-row-first address-field validate-state" data-o_class="form-row form-row-first address-field validate-state">
                                                            <label  htmlFor="shipping_state">County</label>
                                                            <input type="text"
                                                                id="shipping_state"
                                                                name="shipping_state"
                                                                placeholder="State / County"
                                                                
                                                                className="input-text "
                                                                value={formik.values.shipping_state}
                                                                onChange={formik.handleChange}
                                                            />
                                                            {formik.touched.shipping_state && formik.errors.shipping_state ? (
                                                            <div className="alert alert-danger" role="alert">{formik.errors.shipping_state}</div>
                                                        ) : null}
                                                        </p>
                                                        <p id="shipping_postcode_field" className="form-row form-row-last address-field validate-required validate-postcode" data-o_class="form-row form-row-last address-field validate-required validate-postcode">
                                                            <label  htmlFor="shipping_postcode">Postcode <abbr title="required" className="required">*</abbr>
                                                            </label>
                                                            <input type="text"
                                                                
                                                                placeholder="Postcode / Zip"
                                                                id="shipping_postcode"
                                                                name="shipping_postcode"
                                                                className="input-text "
                                                                value={formik.values.shipping_postcode}
                                                                onChange={formik.handleChange}
                                                            />
                                                            {formik.touched.shipping_postcode && formik.errors.shipping_postcode ? (
                                                            <div className="alert alert-danger" role="alert">{formik.errors.shipping_postcode}</div>
                                                        ) : null}
                                                        </p>
                                                        <div className="clear" />
                                                    </div>
                                                    <p id="order_comments_field" className="form-row notes">
                                                        <label  htmlFor="order_comments">Order Notes</label>
                                                        <textarea cols={5} rows={2}
                                                            placeholder="Notes about your order, e.g. special notes for delivery."
                                                            id="order_comments"
                                                            className="input-text "
                                                            name="order_comments"
                                                            
                                                            value={formik.values.order_comments}
                                                            onChange={formik.handleChange}
                                                        />
                                                        {formik.touched.order_comments && formik.errors.order_comments ? (
                                                            <div className="alert alert-danger" role="alert">{formik.errors.order_comments}</div>
                                                        ) : null}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <h3 id="order_review_heading">Your order</h3>
                                        <div id="order_review" style={{ position: 'relative' }}>
                                            <table className="shop_table">
                                                <thead>
                                                    <tr>
                                                        <th className="product-name">Product</th>
                                                        <th className="product-total">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {cartData.items.map((item, index) => (
                                                        <tr className="cart_item" key={index}>
                                                            <td className="product-name">
                                                                {item.name} <strong className="product-quantity">× {item.qty}</strong> </td>
                                                            <td className="product-total">
                                                                <span className="amount">£{item.price * item.qty}</span> </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                                <tfoot>
                                                    <tr className="cart-subtotal">
                                                        <th>Cart Subtotal</th>
                                                        <td><span className="amount">£{cartData.subTotal}</span>
                                                        </td>
                                                    </tr>
                                                    <tr className="shipping">
                                                        <th>Taxe (20%)</th>
                                                        <td>
                                                            {cartData.tax} €
                                                        </td>
                                                    </tr>
                                                    <tr className="order-total">
                                                        <th>Order Total</th>
                                                        <td><strong><span className="amount">{cartData.total} € </span></strong> </td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                            <div id="payment">
                                                <ul className="payment_methods methods">
                                                    <li className="payment_method_bacs">
                                                        <input type="radio" data-order_button_text defaultChecked="checked" defaultValue="bacs" name="payment_method" className="input-radio" id="payment_method_bacs" />
                                                        <label htmlFor="payment_method_bacs">Direct Bank Transfer </label>
                                                        <div className="payment_box payment_method_bacs">
                                                            <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                                        </div>
                                                    </li>
                                                    <li className="payment_method_cheque">
                                                        <input type="radio" data-order_button_text defaultValue="cheque" name="payment_method" className="input-radio" id="payment_method_cheque" />
                                                        <label htmlFor="payment_method_cheque">Cheque Payment </label>
                                                        <div style={{ display: 'none' }} className="payment_box payment_method_cheque">
                                                            <p>Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                                        </div>
                                                    </li>
                                                    <li className="payment_method_paypal">
                                                        <input type="radio" data-order_button_text="Proceed to PayPal" defaultValue="paypal" name="payment_method" className="input-radio" id="payment_method_paypal" />
                                                        <label htmlFor="payment_method_paypal">PayPal <img alt="PayPal Acceptance Mark" src="https://www.paypalobjects.com/webstatic/mktg/Logo/AM_mc_vs_ms_ae_UK.png" /><a title="What is PayPal?" 
                                                        //onClick="javascript:window.open('https://www.paypal.com/gb/webapps/mpp/paypal-popup','WIPaypal','toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700'); return false;" 
                                                        className="about_paypal" href="https://www.paypal.com/gb/webapps/mpp/paypal-popup">What is PayPal?</a>
                                                        </label>
                                                        <div style={{ display: 'none' }} className="payment_box payment_method_paypal">
                                                            <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="form-row place-order">
                                                    <input type="submit"
                                                        data-value="Place order"
                                                        value="Place order"
                                                        id="place_order"
                                                        name="woocommerce_checkout_place_order"
                                                        className="button alt"
                                                        onClick={(e) => { orderPlace(e, cartData) }}
                                                    />
                                                </div>
                                                <div className="clear" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        );
};
