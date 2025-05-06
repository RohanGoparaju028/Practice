defmodule TailingZeroProblem do
  def factorial(n) do
    if n < 2 do
      1
    else
      n*factorial(n-1)
    end
  end
  def tailingZero(n), do: countZero(n,0)
   defp countZero(n,count) do
    if rem(n,10) != 0 do
      count
    else
      countZero(div(n,10),count+1)
    end
   end
end
IO.puts 5 |> TailingZeroProblem.factorial() |> TailingZeroProblem.tailingZero()
IO.puts 2 |> TailingZeroProblem.factorial() |> TailingZeroProblem.tailingZero()
IO.puts 10 |> TailingZeroProblem.factorial() |> TailingZeroProblem.tailingZero()
IO.puts 43|> TailingZeroProblem.factorial() |> TailingZeroProblem.tailingZero()
IO.puts 21 |> TailingZeroProblem.factorial() |> TailingZeroProblem.tailingZero()
