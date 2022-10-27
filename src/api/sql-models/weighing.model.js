module.exports = (sequelize, Sequelize) => {
  const Weighing = sequelize.define("weighing", {
    license_plate: {
      type: Sequelize.STRING
    },
    time: {
      type: Sequelize.STRING
    },
    date: {
      type: Sequelize.STRING
    },
    device_id: {
      type: Sequelize.STRING
    },
    weighing_result: {
      type: Sequelize.STRING
    },
    tare_weight: {
      type: Sequelize.STRING
    },
    total_net_weight: {
      type: Sequelize.STRING
    }
  });

  return Weighing;
};