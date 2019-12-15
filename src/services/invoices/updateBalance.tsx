import axios from 'axios';
import { BASE_PATH, databaseSecret } from 'services';
import { InvoiceReq } from 'services/types';

const updateBalanceSubPath = (
  invoiceReq: InvoiceReq,
  currentUserId: string,
) => {
  return `/users/${currentUserId}/months/${invoiceReq.relativeMonth}/balance`;
};
const updateTotalInsSubPath = (
  invoiceReq: InvoiceReq,
  currentUserId: string,
) => {
  return `/users/${currentUserId}/months/${invoiceReq.relativeMonth}/totalIns`;
};
const updateTotalOutsSubPath = (
  invoiceReq: InvoiceReq,
  currentUserId: string,
) => {
  return `/users/${currentUserId}/months/${invoiceReq.relativeMonth}/totalOuts`;
};

export default {
  onAdd: function* onAdd(invoiceReq: InvoiceReq, currentUserId: string) {
    const _balance = yield axios.get(
      `${BASE_PATH}${updateBalanceSubPath(
        invoiceReq,
        currentUserId,
      )}.json?auth=${databaseSecret}`,
    );
    const balance = yield _balance.data;
    const _totalIns = yield axios.get(
      `${BASE_PATH}${updateTotalInsSubPath(
        invoiceReq,
        currentUserId,
      )}.json?auth=${databaseSecret}`,
    );
    const totalIns = yield _totalIns.data;
    const _totalOuts = yield axios.get(
      `${BASE_PATH}${updateTotalOutsSubPath(
        invoiceReq,
        currentUserId,
      )}.json?auth=${databaseSecret}`,
    );
    const totalOuts = _totalOuts.data;
    if (invoiceReq.type === 'inputs') {
      yield axios.put(
        `${BASE_PATH}${updateTotalInsSubPath(
          invoiceReq,
          currentUserId,
        )}.json?auth=${databaseSecret}`,
        Number(invoiceReq.value) + totalIns,
      );
      yield axios.put(
        `${BASE_PATH}${updateBalanceSubPath(
          invoiceReq,
          currentUserId,
        )}.json?auth=${databaseSecret}`,
        balance + Number(invoiceReq.value),
      );
    } else {
      yield axios.put(
        `${BASE_PATH}${updateTotalOutsSubPath(
          invoiceReq,
          currentUserId,
        )}.json?auth=${databaseSecret}`,
        Number(invoiceReq.value) + totalOuts,
      );
      yield axios.put(
        `${BASE_PATH}${updateBalanceSubPath(
          invoiceReq,
          currentUserId,
        )}.json?auth=${databaseSecret}`,
        balance - Number(invoiceReq.value),
      );
    }
  },
  onDelete: function* onDelete(invoiceReq: InvoiceReq, currentUserId: string) {
    const _balance = yield axios.get(
      `${BASE_PATH}${updateBalanceSubPath(
        invoiceReq,
        currentUserId,
      )}.json?auth=${databaseSecret}`,
    );
    const balance = yield _balance.data;
    const _totalIns = yield axios.get(
      `${BASE_PATH}${updateTotalInsSubPath(
        invoiceReq,
        currentUserId,
      )}.json?auth=${databaseSecret}`,
    );
    const totalIns = yield _totalIns.data;
    const _totalOuts = yield axios.get(
      `${BASE_PATH}${updateTotalOutsSubPath(
        invoiceReq,
        currentUserId,
      )}.json?auth=${databaseSecret}`,
    );
    const totalOuts = _totalOuts.data;
    if (invoiceReq.type === 'inputs') {
      yield axios.put(
        `${BASE_PATH}${updateTotalInsSubPath(
          invoiceReq,
          currentUserId,
        )}.json?auth=${databaseSecret}`,
        totalIns - Number(invoiceReq.value),
      );
      yield axios.put(
        `${BASE_PATH}${updateBalanceSubPath(
          invoiceReq,
          currentUserId,
        )}.json?auth=${databaseSecret}`,
        balance - Number(invoiceReq.value),
      );
    } else {
      yield axios.put(
        `${BASE_PATH}${updateTotalOutsSubPath(
          invoiceReq,
          currentUserId,
        )}.json?auth=${databaseSecret}`,
        totalOuts - Number(invoiceReq.value),
      );
      yield axios.put(
        `${BASE_PATH}${updateBalanceSubPath(
          invoiceReq,
          currentUserId,
        )}.json?auth=${databaseSecret}`,
        balance + Number(invoiceReq.value),
      );
    }
  },
  onEdit: function* onEdit(
    invoiceReq: InvoiceReq,
    currentUserId: string,
    newValue: number,
  ) {
    const _balance = yield axios.get(
      `${BASE_PATH}${updateBalanceSubPath(
        invoiceReq,
        currentUserId,
      )}.json?auth=${databaseSecret}`,
    );
    const balance = yield _balance.data;
    const _totalIns = yield axios.get(
      `${BASE_PATH}${updateTotalInsSubPath(
        invoiceReq,
        currentUserId,
      )}.json?auth=${databaseSecret}`,
    );
    const totalIns = yield _totalIns.data;
    const _totalOuts = yield axios.get(
      `${BASE_PATH}${updateTotalOutsSubPath(
        invoiceReq,
        currentUserId,
      )}.json?auth=${databaseSecret}`,
    );
    const totalOuts = _totalOuts.data;

    if (invoiceReq.type === 'inputs') {
      yield axios.put(
        `${BASE_PATH}${updateTotalInsSubPath(
          invoiceReq,
          currentUserId,
        )}.json?auth=${databaseSecret}`,
        totalIns - Number(invoiceReq.value) + Number(newValue),
      );
      yield axios.put(
        `${BASE_PATH}${updateBalanceSubPath(
          invoiceReq,
          currentUserId,
        )}.json?auth=${databaseSecret}`,
        balance - Number(invoiceReq.value) + Number(newValue),
      );
    } else {
      yield axios.put(
        `${BASE_PATH}${updateTotalOutsSubPath(
          invoiceReq,
          currentUserId,
        )}.json?auth=${databaseSecret}`,
        totalOuts - Number(invoiceReq.value) + Number(newValue),
      );
      yield axios.put(
        `${BASE_PATH}${updateBalanceSubPath(
          invoiceReq,
          currentUserId,
        )}.json?auth=${databaseSecret}`,
        balance + Number(invoiceReq.value) - Number(newValue),
      );
    }
  },

  onPay: function* onPay(
    invoiceReq: InvoiceReq, currentUserId: string, payWith: InvoiceReq | void,
    ) {
    const _balance = yield axios.get(
      `${BASE_PATH}${updateBalanceSubPath(
        invoiceReq,
        currentUserId,
      )}.json?auth=${databaseSecret}`,
    );
    const balance = yield _balance.data;
    const _totalIns = yield axios.get(
      `${BASE_PATH}${updateTotalInsSubPath(
        invoiceReq,
        currentUserId,
      )}.json?auth=${databaseSecret}`,
    );
    const totalIns = yield _totalIns.data;
    const _totalOuts = yield axios.get(
      `${BASE_PATH}${updateTotalOutsSubPath(
        invoiceReq,
        currentUserId,
      )}.json?auth=${databaseSecret}`,
    );
    const totalOuts = _totalOuts.data;
    yield axios.put(
        `${BASE_PATH}${updateTotalOutsSubPath(
          invoiceReq,
          currentUserId,
        )}.json?auth=${databaseSecret}`,
        totalOuts - Number(invoiceReq.value),
      );
    if (!payWith) {
      yield axios.put(
          `${BASE_PATH}${updateBalanceSubPath(
            invoiceReq,
            currentUserId,
          )}.json?auth=${databaseSecret}`,
          balance + Number(invoiceReq.value),
        );
    } else {
      yield axios.put(
          `${BASE_PATH}${updateTotalInsSubPath(
            invoiceReq,
            currentUserId,
          )}.json?auth=${databaseSecret}`,
          totalIns - Number(invoiceReq.value),
        );
    }
  },
};
