"use client";
import axios from "axios";
import { useEffect, useState } from "react";

type UserInfo = {
  id: string;
  name: string | null;
  email: string;
  image: string | null;
  publicPrompts: number;
  privatePrompts: number;
};

const useUserInfo = () => {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const response = await axios.get<{ user: UserInfo }>(
          "/api/me"
        );
        const { user } = response.data;
        setUser(user);
      } catch (err) {
        console.error("Failed to load user info", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return { user, loading };
};

export default useUserInfo;
