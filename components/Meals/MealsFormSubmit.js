import React from "react";
import useActionState from "react";

export default function MealsFormSubmit() {
  const { pending } = useActionState();
  return (
    <button disabled={pending}>
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
}
