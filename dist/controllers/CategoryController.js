"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = __importDefault(require("../models/Category"));
class CategoryController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                console.log(body);
                const data = yield Category_1.default.create(body);
                res.status(201).json({ message: 'Category created successfully', data });
            }
            catch (error) {
                res.status(400).json({
                    message: 'Category creation failed',
                    error: error.message,
                });
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield Category_1.default.find();
                data.sort((a, b) => a.nameCategory.localeCompare(b.nameCategory));
                res.status(200).json(data);
            }
            catch (error) {
                res
                    .status(400)
                    .json({ message: 'Error Get failed', error: error.message });
            }
        });
    }
    findByShowInMenu(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield Category_1.default.find({ showInMenu: true });
                data.sort((a, b) => a.nameCategory.localeCompare(b.nameCategory));
                res.status(200).json(data);
            }
            catch (error) {
                res
                    .status(400)
                    .json({ message: 'Error Get failed', error: error.message });
            }
        });
    }
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const data = yield Category_1.default.findById(id);
                res.status(200).json(data);
            }
            catch (error) {
                res
                    .status(400)
                    .json({ message: 'Error Get failed', error: error.message });
            }
        });
    }
    updateOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                console.log(body);
                const data = yield Category_1.default.updateOne({ _id: body._id }, { $set: body });
                res.status(200).json({ message: 'Category updated successfully', body });
            }
            catch (error) {
                res.status(400).json({
                    message: 'Error Update failed',
                    error: error.message,
                });
            }
        });
    }
    deleteOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                console.log(id + 'id que chegou para delete');
                const data = yield Category_1.default.deleteOne({ _id: id });
                res.status(200).json({ message: 'Category deleted successfully', data });
            }
            catch (error) {
                res.status(400).json({
                    message: 'Error Delete failed',
                    error: error.message,
                });
            }
        });
    }
}
exports.default = new CategoryController();
//# sourceMappingURL=CategoryController.js.map