import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    store_name: "",
    store_address: "",
    style_tokyo_id: "",
    password: "",
    confirm_password: "",
    salon_id: "",
    salon_password: "",
    salon_confirm_password: "",
  });
  const {
    store_name,
    password,
    store_address,
    confirm_password,
    style_tokyo_id,
    salon_id,
    salon_password,
    salon_confirm_password,
  } = inputValue;
  const [alarm, setAlarm] = useState("");
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) => {
    console.log(err);
    setAlarm(err);
  };
  const handleSuccess = (msg) => {
    console.log(msg);
    setAlarm(msg);
  };

  const handleSubmit = async (e) => {
    console.log("post: ", inputValue);
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "/api/user/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 0);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto w-8/12 h-8/12 max-md:w-6/12 max-md:h-6/12"
            // src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            src="logo/4.png"
            alt="Your Company"
          />
          <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 max-md:text-xl">
            ユーザー登録
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm max-md:px-4">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-md font-bold leading-6 text-gray-900"
              >
                店舗名
              </label>
              <div className="mt-2">
                <input
                  id="store_name"
                  name="store_name"
                  type="text"
                  placeholder="例: "
                  value={store_name}
                  onChange={handleOnChange}
                  className="break-keep block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-md font-bold leading-6 text-gray-900"
              >
                店舗住所
              </label>
              <div className="mt-2">
                <input
                  name="store_address"
                  type="text"
                  value={store_address}
                  placeholder="例: "
                  onChange={handleOnChange}
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-md font-bold leading-6 text-gray-900"
              >
                Style Tokyo User ID
              </label>
              <div className="mt-2">
                <input
                  name="style_tokyo_id"
                  type="text"
                  value={style_tokyo_id}
                  placeholder="例: abc123"
                  onChange={handleOnChange}
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="email"
                  className="block text-md font-bold leading-6 text-gray-900"
                >
                  パスワード
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="例: 1234567890"
                  value={password}
                  onChange={handleOnChange}
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="email"
                  className="block text-md font-bold leading-6 text-gray-900"
                >
                  パスワード確認
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirm_password"
                  name="confirm_password"
                  type="password"
                  placeholder="例: 1234567890"
                  value={confirm_password}
                  onChange={handleOnChange}
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-md font-bold leading-6 text-gray-900"
              >
                Salon Board ID
              </label>
              <div className="mt-2">
                <input
                  name="salon_id"
                  type="text"
                  value={salon_id}
                  placeholder="例: abc123"
                  onChange={handleOnChange}
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="email"
                  className="block text-md font-bold leading-6 text-gray-900"
                >
                  Salon Board パスワード
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="salon_password"
                  type="password"
                  placeholder="例: 1234567890"
                  value={salon_password}
                  onChange={handleOnChange}
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="email"
                  className="block text-md font-bold leading-6 text-gray-900"
                >
                  Salon Board パスワード確認
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirm_password"
                  name="salon_confirm_password"
                  type="password"
                  placeholder="例: 1234567890"
                  value={salon_confirm_password}
                  onChange={handleOnChange}
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                ユーザー登録
              </button>
            </div>
          </form>

          <div>
            <p className="mt-10 text-center text-sm text-violet-600">
              <Link
                to="/"
                className="font-semibold leading-6 text-violet-600 hover:text-violet-500"
              >
                ログインに移行
              </Link>
            </p>
          </div>

          <p className="mt-10 text-center text-sm text-red-600">
            <Link className="font-semibold leading-6 text-red-600 hover:text-red-500">
              {alarm}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
