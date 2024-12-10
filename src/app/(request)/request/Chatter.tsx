"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChatField from "@/components/common/ChatField";
import DatePicker from "@/components/Quote/DatePicker";
import StepSelectionField from "./StepSelectionFiled";
import AddressSelectionField from "./AddressSelectionField";
import { useQuoteProgress } from "@/context/QuoteProgressContext";

interface Address {
  from: string;
  to: string;
}

interface Message {
  type: "user" | "bot" | "loading";
  text?: string;
}

const chatBubbleVariants = {
  initial: { opacity: 0, y: 20, scale: 0.97 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
  exit: { opacity: 0, y: -10, scale: 0.97, transition: { duration: 0.4 } },
};

const loadingDotVariants = {
  animate: {
    scale: [1, 1.5, 1],
    opacity: [0.5, 1, 0.5],
    transition: {
      repeat: Infinity,
      duration: 1,
      ease: "easeInOut",
      staggerChildren: 0.3,
    },
  },
};

const LoadingDots = () => (
  <div className="flex items-center gap-1">
    {Array.from({ length: 3 }).map((_, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0.5, scale: 1 }}
        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.5, 1] }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "easeInOut",
          delay: i * 0.2,
        }}
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "#ccc",
        }}
      />
    ))}
  </div>
);

const EditButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="text-sm text-gray-400 hover:text-gray-600 mt-1"
  >
    수정하기
  </button>
);

const EstimateRequest: React.FC = () => {
  const [type, setType] = useState<string>("");
  const [date, setDate] = useState<Date | null>(null);
  const [addresses, setAddresses] = useState<Address>({ from: "", to: "" });
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      text: "몇 가지 정보만 알려주시면 최대 5개의 견적을 받을 수 있어요 :)",
    },
    { type: "bot", text: "이사 종류를 선택해 주세요." },
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { step, setStep } = useQuoteProgress();

  const handleNextStep = (newMessages: Message[], delay = 500) => {
    setIsLoading(true);
    setMessages((prev) => [...prev, { type: "loading" }]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev.slice(0, -1), // 로딩 메시지 제거
        ...newMessages,
      ]);
      setIsLoading(false);
      setStep(step + 1);
    }, delay);
  };

  const handleTypeSelection = (selectedType: string) => {
    setType(selectedType);
    handleNextStep(
      [
        { type: "user", text: selectedType },
        { type: "bot", text: "이사 예정일을 선택해주세요." },
      ],
      1000
    );
  };

  const handleDateComplete = (isoString: string) => {
    const selectedDate = new Date(isoString);
    setDate(selectedDate);
    handleNextStep(
      [
        { type: "user", text: formatDateTime(selectedDate) },
        { type: "bot", text: "이사 지역을 선택해주세요." },
      ],
      1000
    );
  };

  const handleAddressSelection = (fromAddr: string, toAddr: string) => {
    setAddresses({ from: fromAddr, to: toAddr });
  };

  const formatDateTime = (date: Date | null) => {
    if (!date) return "";

    return `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분`;
  };

  const handleSubmit = () => {
    console.log("견적 요청 완료", { type, date, addresses });
  };

  const handleEdit = (editStep: number) => {
    setStep(editStep);

    setMessages((prev) => {
      const stepStartIndices = {
        0: 2,
        1: prev.findIndex((m) => m.text === "이사 예정일을 선택해주세요."),
        2: prev.findIndex((m) => m.text === "이사 지역을 선택해주세요."),
      };

      const messages = prev.slice(
        0,
        stepStartIndices[editStep as keyof typeof stepStartIndices]
      );

      switch (editStep) {
        case 0:
          break;
        case 1:
          messages.push({ type: "bot", text: "이사 예정일을 선택해주세요." });
          break;
        case 2:
          messages.push({ type: "bot", text: "이사 지역을 선택해주세요." });
          break;
      }

      return messages;
    });

    if (editStep <= 0) {
      setType("");
    }
    if (editStep <= 1) {
      setDate(null);
    }
    if (editStep <= 2) {
      setAddresses({ from: "", to: "" });
    }
  };

  return (
    <div className="w-full py-10">
      <div className="my-4 space-y-4">
        {/* Messages */}
        <AnimatePresence>
          {messages.map((message, index) => (
            <motion.div
              key={`message-${index}`}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={chatBubbleVariants}
            >
              <div className="flex flex-col">
                <div
                  className={`flex ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <ChatField
                    value={
                      message.type === "loading" ? (
                        <LoadingDots />
                      ) : (
                        message.text || ""
                      )
                    }
                    variant={message.type === "user" ? "primary" : "default"}
                    type={message.type === "user" ? "custom" : "admin"}
                    radius="24px"
                  />
                </div>
                {/* Add edit button for specific messages */}
                {message.type === "user" && (
                  <div className="flex justify-end">
                    {message.text === type && (
                      <EditButton onClick={() => handleEdit(0)} />
                    )}
                    {message.text === (date ? formatDateTime(date) : "") && (
                      <EditButton onClick={() => handleEdit(1)} />
                    )}
                    {message.text?.includes("출발지:") && (
                      <EditButton onClick={() => handleEdit(2)} />
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Step Components */}
        <AnimatePresence mode="wait">
          {messages[messages.length - 1]?.type === "bot" && !isLoading && (
            <motion.div
              key={`step-${step}`}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={chatBubbleVariants}
            >
              <div className="flex justify-end">
                {step === 0 && (
                  <StepSelectionField
                    type="custom"
                    options={[
                      {
                        text: "소형이사 (원룸, 투룸, 20평대 미만)",
                        value: "소형이사",
                      },
                      {
                        text: "가정이사 (쓰리룸, 20평대 이상)",
                        value: "가정이사",
                      },
                      {
                        text: "사무실이사 (사무실, 상업공간)",
                        value: "사무실이사",
                      },
                    ]}
                    onSelect={handleTypeSelection}
                  />
                )}
                {step === 1 && (
                  <DatePicker
                    onChange={() => {}}
                    onComplete={handleDateComplete}
                  />
                )}
                {step === 2 && (
                  <div className="flex flex-col gap-4">
                    <AddressSelectionField
                      type="custom"
                      onSelect={handleAddressSelection}
                    />
                    {addresses.from && addresses.to && (
                      <button
                        onClick={handleSubmit}
                        className="w-full py-4 bg-pr-blue-300 text-white font-semibold rounded-2xl hover:bg-pr-blue-200"
                      >
                        견적 확정하기
                      </button>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default EstimateRequest;
