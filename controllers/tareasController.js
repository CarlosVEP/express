var tareasModel = require('../models/tareasModel.js');

/**
 * tareasController.js
 *
 * @description :: Server-side logic for managing tareass.
 */
module.exports = {

    /**
     * tareasController.list()
     */
    list: function (req, res) {
        tareasModel.find(function (err, tareass) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting tareas.',
                    error: err
                });
            }
            return res.json(tareass);
        });
    },

    /**
     * tareasController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        tareasModel.findOne({_id: id}, function (err, tareas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting tareas.',
                    error: err
                });
            }
            if (!tareas) {
                return res.status(404).json({
                    message: 'No such tareas'
                });
            }
            return res.json(tareas);
        });
    },

    /**
     * tareasController.create()
     */
    create: function (req, res) {
        var tareas = new tareasModel({
			titulo : req.body.titulo,
			descripcion : req.body.descripcion

        });

        tareas.save(function (err, tareas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating tareas',
                    error: err
                });
            }
            return res.status(201).json(tareas);
        });
    },

    /**
     * tareasController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        tareasModel.findOne({_id: id}, function (err, tareas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting tareas',
                    error: err
                });
            }
            if (!tareas) {
                return res.status(404).json({
                    message: 'No such tareas'
                });
            }

            tareas.titulo = req.body.titulo ? req.body.titulo : tareas.titulo;
			tareas.descripcion = req.body.descripcion ? req.body.descripcion : tareas.descripcion;
			
            tareas.save(function (err, tareas) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating tareas.',
                        error: err
                    });
                }

                return res.json(tareas);
            });
        });
    },

    /**
     * tareasController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        tareasModel.findByIdAndRemove(id, function (err, tareas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the tareas.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
