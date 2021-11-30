import { Formik, Form } from "formik";
import TextField from "../components/TextField";
const Checkout = () => {
  return (
    <div>
      <header className="h-24 shadow-md"></header>
      {/* banner */}
      <div
        className="h-64 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(to bottom,rgba(0,0,0, .3),
                rgba(0,0,0, .3)), url(${"https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/08/31053756/Grocery-1-1.jpg"})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-white font-bold text-2xl">Checkout</h1>
      </div>
      {/*  coupon*/}
      <div className="px-10">
        <div className="border p-5 text-black font-medium mt-5 rounded pb-7">
          <h3 className="mb-4">
            If you have a coupon code, please apply it below.
          </h3>
          <div className="block sm:flex items-center">
            <input
              type="text"
              className="w-full sm:w-1/2 py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-600 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              placeholder="Coupon code"
            />
            <button className="w-full sm:w-auto ml-auto sm:ml-3 mt-3 sm:mt-auto bg-black text-white rounded px-6 py-3 ">
              Apply coupon
            </button>
          </div>
        </div>
      </div>
      {/* main form */}
      <Formik
        initialValues={{
          fullName: "",
          phoneNumber: "",
          regiion: "",
          city: "",
          area: "",
          address: "",
        }}
        onSubmit={async (values, actions) => {
          //   const response = await login({ variables: values });
          //   if (response.data?.login.errors) {
          //     let errorsMap: any = toErrorMap(response.data?.login.errors);
          //     if (errorsMap.hasOwnProperty("error")) {
          //       setState({
          //         ...state,
          //         error: errorsMap.error,
          //       });
          //     }
          //     actions.setErrors(errorsMap);
          //   } else if (response.data?.login.user) {
          //     sessionStorage.setItem("jwtToken", response.data?.login.user.token);
          //     loggedInUserVar(response.data?.login.user);
          //     // router.push("/");
          //     router.push("/shipping-info");
          //   }
        }}
      >
        {({ values, isSubmitting, errors }) => (
          <>
            <Form className="px-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* left */}

                <div>
                  {/* <h1 className="font-bold text-2xl">Billing details</h1> */}
                  <div className="my-4">
                    <label htmlFor="full-name" className="block mb-2">
                      Full Name
                    </label>
                    <TextField
                      id="full-name"
                      name="fullName"
                      type="text"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="full-name" className="block mb-2">
                      Phone Number
                    </label>
                    <TextField
                      id="phone-number"
                      name="phoneNumber"
                      type="text"
                      placeholder="Phone Number"
                    />
                  </div>

                  <div className="my-3">
                    <label htmlFor="address" className="block mb-2">
                      Address
                    </label>
                    <TextField
                      id="address"
                      name="address"
                      type="text"
                      placeholder="Address"
                    />
                  </div>
                </div>
                {/* right */}

                <div>
                  <h1 className="text-center font-bold text-2xl">
                    Your Orders
                  </h1>

                </div>
              </div>
              <pre>{JSON.stringify(values, null, 2)}</pre>
              <pre>{JSON.stringify(errors, null, 2)}</pre>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default Checkout;

// https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/08/31053756/Grocery-1-1.jpg
