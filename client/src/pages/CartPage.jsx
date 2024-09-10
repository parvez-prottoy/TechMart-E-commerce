import React from "react";
import Carts from "../components/carts/Carts";
import { Button } from "keep-react";

const CartPage = () => {
  return (
    <section>
      <div className="container py-10">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              Your Cart
              <span className="text-orange">.</span>
            </h2>
          </header>
          <div className="mt-8">
            <Carts />
            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-gray-700">
                  <div className="flex justify-between !text-base font-medium">
                    <dt className="font-bold text-2xl">Total</dt>
                    <dd className="font-bold text-2xl">$200</dd>
                  </div>
                </dl>
                <div className="flex justify-end">
                  <Button
                    href="#"
                    className="block rounded bg-blue px-5 py-3 text-sm text-white font-medium transition hover:bg-orange"
                  >
                    Checkout
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
