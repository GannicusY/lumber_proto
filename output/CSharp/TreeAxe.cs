// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: proto/Spec/TreeAxe.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021, 8981
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Lumber.Spec {

  /// <summary>Holder for reflection information generated from proto/Spec/TreeAxe.proto</summary>
  public static partial class TreeAxeReflection {

    #region Descriptor
    /// <summary>File descriptor for proto/Spec/TreeAxe.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static TreeAxeReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "Chhwcm90by9TcGVjL1RyZWVBeGUucHJvdG8SC2x1bWJlci5TcGVjIocBCgdU",
            "cmVlQXhlEgoKAmlkGAEgASgFEhkKEVRyZWVBeGVfTGV2ZWxfR2FwGAIgAygF",
            "EhQKDFRyZWVBeGVfUHJvYhgDIAEoBRIUCgxUcmVlQXhlX01pbmkYBCABKAUS",
            "FAoMVHJlZUF4ZV9Hb2xkGAUgASgFEhMKC1RyZWVBeGVfTWF4GAYgASgFYgZw",
            "cm90bzM="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { },
          new pbr::GeneratedClrTypeInfo(null, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Lumber.Spec.TreeAxe), global::Lumber.Spec.TreeAxe.Parser, new[]{ "Id", "TreeAxeLevelGap", "TreeAxeProb", "TreeAxeMini", "TreeAxeGold", "TreeAxeMax" }, null, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  [global::System.Diagnostics.DebuggerDisplayAttribute("{ToString(),nq}")]
  public sealed partial class TreeAxe : pb::IMessage<TreeAxe>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<TreeAxe> _parser = new pb::MessageParser<TreeAxe>(() => new TreeAxe());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pb::MessageParser<TreeAxe> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Lumber.Spec.TreeAxeReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public TreeAxe() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public TreeAxe(TreeAxe other) : this() {
      id_ = other.id_;
      treeAxeLevelGap_ = other.treeAxeLevelGap_.Clone();
      treeAxeProb_ = other.treeAxeProb_;
      treeAxeMini_ = other.treeAxeMini_;
      treeAxeGold_ = other.treeAxeGold_;
      treeAxeMax_ = other.treeAxeMax_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public TreeAxe Clone() {
      return new TreeAxe(this);
    }

    /// <summary>Field number for the "id" field.</summary>
    public const int IdFieldNumber = 1;
    private int id_;
    /// <summary>
    /// ID
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int Id {
      get { return id_; }
      set {
        id_ = value;
      }
    }

    /// <summary>Field number for the "TreeAxe_Level_Gap" field.</summary>
    public const int TreeAxeLevelGapFieldNumber = 2;
    private static readonly pb::FieldCodec<int> _repeated_treeAxeLevelGap_codec
        = pb::FieldCodec.ForInt32(18);
    private readonly pbc::RepeatedField<int> treeAxeLevelGap_ = new pbc::RepeatedField<int>();
    /// <summary>
    /// 树减斧等级区间
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public pbc::RepeatedField<int> TreeAxeLevelGap {
      get { return treeAxeLevelGap_; }
    }

    /// <summary>Field number for the "TreeAxe_Prob" field.</summary>
    public const int TreeAxeProbFieldNumber = 3;
    private int treeAxeProb_;
    /// <summary>
    /// 触发概率
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int TreeAxeProb {
      get { return treeAxeProb_; }
      set {
        treeAxeProb_ = value;
      }
    }

    /// <summary>Field number for the "TreeAxe_Mini" field.</summary>
    public const int TreeAxeMiniFieldNumber = 4;
    private int treeAxeMini_;
    /// <summary>
    /// 砍伐次数必触发
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int TreeAxeMini {
      get { return treeAxeMini_; }
      set {
        treeAxeMini_ = value;
      }
    }

    /// <summary>Field number for the "TreeAxe_Gold" field.</summary>
    public const int TreeAxeGoldFieldNumber = 5;
    private int treeAxeGold_;
    /// <summary>
    /// 掉落金币
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int TreeAxeGold {
      get { return treeAxeGold_; }
      set {
        treeAxeGold_ = value;
      }
    }

    /// <summary>Field number for the "TreeAxe_Max" field.</summary>
    public const int TreeAxeMaxFieldNumber = 6;
    private int treeAxeMax_;
    /// <summary>
    /// 当前等级最大次数
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int TreeAxeMax {
      get { return treeAxeMax_; }
      set {
        treeAxeMax_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override bool Equals(object other) {
      return Equals(other as TreeAxe);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public bool Equals(TreeAxe other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Id != other.Id) return false;
      if(!treeAxeLevelGap_.Equals(other.treeAxeLevelGap_)) return false;
      if (TreeAxeProb != other.TreeAxeProb) return false;
      if (TreeAxeMini != other.TreeAxeMini) return false;
      if (TreeAxeGold != other.TreeAxeGold) return false;
      if (TreeAxeMax != other.TreeAxeMax) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override int GetHashCode() {
      int hash = 1;
      if (Id != 0) hash ^= Id.GetHashCode();
      hash ^= treeAxeLevelGap_.GetHashCode();
      if (TreeAxeProb != 0) hash ^= TreeAxeProb.GetHashCode();
      if (TreeAxeMini != 0) hash ^= TreeAxeMini.GetHashCode();
      if (TreeAxeGold != 0) hash ^= TreeAxeGold.GetHashCode();
      if (TreeAxeMax != 0) hash ^= TreeAxeMax.GetHashCode();
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void WriteTo(pb::CodedOutputStream output) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      output.WriteRawMessage(this);
    #else
      if (Id != 0) {
        output.WriteRawTag(8);
        output.WriteInt32(Id);
      }
      treeAxeLevelGap_.WriteTo(output, _repeated_treeAxeLevelGap_codec);
      if (TreeAxeProb != 0) {
        output.WriteRawTag(24);
        output.WriteInt32(TreeAxeProb);
      }
      if (TreeAxeMini != 0) {
        output.WriteRawTag(32);
        output.WriteInt32(TreeAxeMini);
      }
      if (TreeAxeGold != 0) {
        output.WriteRawTag(40);
        output.WriteInt32(TreeAxeGold);
      }
      if (TreeAxeMax != 0) {
        output.WriteRawTag(48);
        output.WriteInt32(TreeAxeMax);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    void pb::IBufferMessage.InternalWriteTo(ref pb::WriteContext output) {
      if (Id != 0) {
        output.WriteRawTag(8);
        output.WriteInt32(Id);
      }
      treeAxeLevelGap_.WriteTo(ref output, _repeated_treeAxeLevelGap_codec);
      if (TreeAxeProb != 0) {
        output.WriteRawTag(24);
        output.WriteInt32(TreeAxeProb);
      }
      if (TreeAxeMini != 0) {
        output.WriteRawTag(32);
        output.WriteInt32(TreeAxeMini);
      }
      if (TreeAxeGold != 0) {
        output.WriteRawTag(40);
        output.WriteInt32(TreeAxeGold);
      }
      if (TreeAxeMax != 0) {
        output.WriteRawTag(48);
        output.WriteInt32(TreeAxeMax);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(ref output);
      }
    }
    #endif

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int CalculateSize() {
      int size = 0;
      if (Id != 0) {
        size += 1 + pb::CodedOutputStream.ComputeInt32Size(Id);
      }
      size += treeAxeLevelGap_.CalculateSize(_repeated_treeAxeLevelGap_codec);
      if (TreeAxeProb != 0) {
        size += 1 + pb::CodedOutputStream.ComputeInt32Size(TreeAxeProb);
      }
      if (TreeAxeMini != 0) {
        size += 1 + pb::CodedOutputStream.ComputeInt32Size(TreeAxeMini);
      }
      if (TreeAxeGold != 0) {
        size += 1 + pb::CodedOutputStream.ComputeInt32Size(TreeAxeGold);
      }
      if (TreeAxeMax != 0) {
        size += 1 + pb::CodedOutputStream.ComputeInt32Size(TreeAxeMax);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(TreeAxe other) {
      if (other == null) {
        return;
      }
      if (other.Id != 0) {
        Id = other.Id;
      }
      treeAxeLevelGap_.Add(other.treeAxeLevelGap_);
      if (other.TreeAxeProb != 0) {
        TreeAxeProb = other.TreeAxeProb;
      }
      if (other.TreeAxeMini != 0) {
        TreeAxeMini = other.TreeAxeMini;
      }
      if (other.TreeAxeGold != 0) {
        TreeAxeGold = other.TreeAxeGold;
      }
      if (other.TreeAxeMax != 0) {
        TreeAxeMax = other.TreeAxeMax;
      }
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(pb::CodedInputStream input) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      input.ReadRawMessage(this);
    #else
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 8: {
            Id = input.ReadInt32();
            break;
          }
          case 18:
          case 16: {
            treeAxeLevelGap_.AddEntriesFrom(input, _repeated_treeAxeLevelGap_codec);
            break;
          }
          case 24: {
            TreeAxeProb = input.ReadInt32();
            break;
          }
          case 32: {
            TreeAxeMini = input.ReadInt32();
            break;
          }
          case 40: {
            TreeAxeGold = input.ReadInt32();
            break;
          }
          case 48: {
            TreeAxeMax = input.ReadInt32();
            break;
          }
        }
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    void pb::IBufferMessage.InternalMergeFrom(ref pb::ParseContext input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, ref input);
            break;
          case 8: {
            Id = input.ReadInt32();
            break;
          }
          case 18:
          case 16: {
            treeAxeLevelGap_.AddEntriesFrom(ref input, _repeated_treeAxeLevelGap_codec);
            break;
          }
          case 24: {
            TreeAxeProb = input.ReadInt32();
            break;
          }
          case 32: {
            TreeAxeMini = input.ReadInt32();
            break;
          }
          case 40: {
            TreeAxeGold = input.ReadInt32();
            break;
          }
          case 48: {
            TreeAxeMax = input.ReadInt32();
            break;
          }
        }
      }
    }
    #endif

  }

  #endregion

}

#endregion Designer generated code