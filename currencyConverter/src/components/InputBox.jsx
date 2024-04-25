import React, { useId } from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurruncyChnage,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisabled = false,
    currencyDisable = false,
    className = "",
}) {

    const amountInputId = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label
                    htmlFor={amountInputId}
                    className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    id={amountInputId}
                    focus="true"
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    disabled={currencyDisable}
                    onChange={(e) => onCurruncyChnage && onCurruncyChnage(e.target.value)}
                >
                    {
                        currencyOptions.map((value) => (
                            <option value={value} key={value}>{value}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}

export default InputBox;