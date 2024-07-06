import { useEffect, useState } from "react";
import { ethers, formatEther } from "ethers";

export const useGetUserBalance = (userAddress, providerURL) => {
  const [balance, setBalance] = useState(null); // Stores the fetched balance
  const [isLoading, setIsLoading] = useState(false); // Tracks loading state
  const [error, setError] = useState(null); // Stores any errors

  useEffect(() => {
    const fetchBalance = async () => {
      setIsLoading(true);
      setError(null); // Clear any previous errors

      try {
        // Create a new provider
        const provider = new ethers.JsonRpcProvider(providerURL);

        // Get the user's balance
        const weiBalance = await provider.getBalance(userAddress);

        // Format balance for display
        const formattedBalance = formatEther(weiBalance);

        setBalance(formattedBalance);
      } catch (error) {
        console.error("Error fetching user balance:", error);
        setError(error.message); // Set error message
      } finally {
        setIsLoading(false);
      }
    };

    if (userAddress && providerURL) {
      fetchBalance();
    }
  }, [userAddress, providerURL]);

  return { balance, isLoading, error };
};